import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const token = process.env.REPLICATE_API_TOKEN;
if (!token) {
  console.error('Missing REPLICATE_API_TOKEN');
  process.exit(1);
}

const images = [
  {
    file: 'hero-lab.webp',
    aspect: '16:9',
    prompt:
      'Ultra-realistic editorial photograph of Indian oncology scientists collaborating in a modern cancer research laboratory, advanced microscopes, genomic workstations, daylight through large windows, premium magazine photography style, cinematic depth, clean composition, no text, no logos, no watermark',
  },
  {
    file: 'hero-director.webp',
    aspect: '3:4',
    prompt:
      'Professional portrait of a senior Indian woman cancer researcher in a white lab coat inside a premium research institute, confident and compassionate expression, soft studio-quality lighting, photorealistic, shallow depth of field, no text, no logo, no watermark',
  },
  {
    file: 'facility-molecular.webp',
    aspect: '4:3',
    prompt:
      'Close-up photorealistic image of molecular oncology workflow, gloved scientist handling pipette near PCR setup and sequencing instruments, clean sterile lab, rich details, documentary style, no text, no watermark',
  },
  {
    file: 'facility-clinical-trials.webp',
    aspect: '4:3',
    prompt:
      'Photorealistic clinical trials coordination room in Indian cancer institute, researchers reviewing trial dashboards and consent documents, modern medical setting, natural color grading, no identifiable patients, no text',
  },
  {
    file: 'facility-screening.webp',
    aspect: '4:3',
    prompt:
      'Community preventive oncology screening camp in South India, professional healthcare team using portable medical devices with respectful patient interaction from distance, optimistic atmosphere, photorealistic documentary style, no text, no logos',
  },
  {
    file: 'facility-imaging.webp',
    aspect: '4:3',
    prompt:
      'High-end diagnostic imaging suite in a cancer center, MRI and PET-CT environment with clinicians preparing scan workflow, clean modern architecture, realistic lighting, no branding, no text',
  },
  {
    file: 'facility-radiation.webp',
    aspect: '4:3',
    prompt:
      'Advanced radiation therapy room with linear accelerator in operation-ready mode, oncologist and physicist team discussing treatment planning, photorealistic, premium medical architecture, no text',
  },
  {
    file: 'collaboration-global.webp',
    aspect: '16:9',
    prompt:
      'Editorial-style image symbolizing global cancer research collaboration, Indian and international scientists in discussion around digital molecular models and data walls, premium conference-lab hybrid setting, photorealistic, no text',
  },
  {
    file: 'publications-journal.webp',
    aspect: '16:9',
    prompt:
      'Photorealistic close-up of hands annotating oncology research papers next to laptop with molecular visualizations and microscope in background, sophisticated academic atmosphere, no text, no watermark',
  },
];

const outDir = path.join(process.cwd(), 'public', 'research-images');
await mkdir(outDir, { recursive: true });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function createPrediction(image, attempt = 1) {
  const response = await fetch(
    'https://api.replicate.com/v1/models/black-forest-labs/flux-dev/predictions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Prefer: 'wait=60',
      },
      body: JSON.stringify({
        input: {
          prompt: image.prompt,
          num_outputs: 1,
          aspect_ratio: image.aspect,
          output_format: 'webp',
          guidance: 3.5,
        },
      }),
    }
  );

  if (response.status === 429) {
    const body = await response.json().catch(() => ({}));
    const retryAfterSeconds = Number(body.retry_after || response.headers.get('retry-after') || 8);
    const waitMs = Math.max(2000, retryAfterSeconds * 1000 + 500);
    console.log(`RATE-LIMIT ${image.file} attempt ${attempt} wait ${waitMs}ms`);
    await sleep(waitMs);
    return createPrediction(image, attempt + 1);
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Replicate request failed for ${image.file}: ${text}`);
  }

  return response.json();
}

async function createOne(image) {
  const targetPath = path.join(outDir, image.file);

  const prediction = await createPrediction(image);

  if (prediction.status !== 'succeeded' || !prediction.output?.[0]) {
    throw new Error(
      `Prediction did not succeed for ${image.file}. Status: ${prediction.status}. Error: ${prediction.error || 'none'}`
    );
  }

  const imageResponse = await fetch(prediction.output[0]);
  if (!imageResponse.ok) {
    throw new Error(`Failed downloading output for ${image.file}`);
  }

  const arrayBuffer = await imageResponse.arrayBuffer();
  await writeFile(targetPath, Buffer.from(arrayBuffer));
  console.log(`OK ${image.file}`);
}

for (const image of images) {
  await createOne(image);
  await sleep(2000);
}

console.log('All images generated.');
