interface EquipmentCardProps {
  item: { name: string; description: string; icon: string; image?: string };
}

export default function EquipmentCard({ item }: EquipmentCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {item.image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
          <div>
            <h4 className="font-bold text-[var(--ci-gray-900)] text-sm mb-1">
              {item.name}
            </h4>
            <p className="text-xs text-[var(--ci-gray-600)] leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
