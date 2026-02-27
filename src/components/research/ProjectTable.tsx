import type { Project } from "@/data/faculty";

interface ProjectTableProps {
  projects: Project[];
}

export default function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <>
      {/* Desktop: Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-[var(--ci-blue)]">
              <th className="text-left py-3 pr-4 font-bold text-[var(--ci-blue)]">
                Project
              </th>
              <th className="text-left py-3 pr-4 font-bold text-[var(--ci-blue)]">
                Funding Agency
              </th>
              <th className="text-left py-3 pr-4 font-bold text-[var(--ci-blue)]">
                Role
              </th>
              <th className="text-left py-3 font-bold text-[var(--ci-blue)]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-[var(--ci-gray-100)]" : "bg-white"
                }
              >
                <td className="py-3 pr-4 pl-2">{project.title}</td>
                <td className="py-3 pr-4">{project.fundingAgency}</td>
                <td className="py-3 pr-4">{project.role}</td>
                <td className="py-3">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      project.status === "ongoing"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Stacked Cards */}
      <div className="md:hidden space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[var(--ci-gray-100)] rounded-lg p-4 space-y-2"
          >
            <h4 className="font-heading text-sm font-bold text-[var(--ci-gray-900)] leading-snug">
              {project.title}
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full font-bold ${
                  project.status === "ongoing"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {project.status === "ongoing" ? "Ongoing" : "Completed"}
              </span>
            </div>
            <p className="text-xs text-[var(--ci-gray-600)]">
              <strong>Funding:</strong> {project.fundingAgency}
            </p>
            <p className="text-xs text-[var(--ci-gray-600)]">
              <strong>Role:</strong> {project.role}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
