interface EquipmentCardProps {
  item: { name: string; description: string; icon: string };
}

export default function EquipmentCard({ item }: EquipmentCardProps) {
  return (
    <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4">
      <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
      <div>
        <h4 className="font-bold text-[var(--ci-gray-900)] text-sm mb-1">
          {item.name}
        </h4>
        <p className="text-sm text-[var(--ci-gray-600)] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
