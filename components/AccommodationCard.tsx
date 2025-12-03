import Image from "next/image";

interface AccommodationCardProps {
  title: string;
  image: string;
  description: string;
  pricing: {
    night: string;
    week: string;
    twoWeeks: string;
    threeWeeks: string;
    month: string;
    monthWinter?: string;
    twoPeople?: {
      night: string;
      week: string;
    };
  };
}

export default function AccommodationCard({
  title,
  image,
  description,
  pricing,
}: AccommodationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary">{title}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{description}</p>
        
        <div className="space-y-2 sm:space-y-3">
          <div className="flex justify-between items-center py-2 sm:py-2.5 border-b border-gray-200">
            <span className="text-sm sm:text-base font-semibold">Per Night</span>
            <span className="text-base sm:text-lg text-primary font-bold">{pricing.night}</span>
          </div>
          <div className="flex justify-between items-center py-2 sm:py-2.5 border-b border-gray-200">
            <span className="text-sm sm:text-base font-semibold">Per Week</span>
            <span className="text-base sm:text-lg text-primary font-bold">{pricing.week}</span>
          </div>
          <div className="flex justify-between items-center py-2 sm:py-2.5 border-b border-gray-200">
            <span className="text-sm sm:text-base font-semibold">2 Weeks</span>
            <span className="text-base sm:text-lg text-primary font-bold">{pricing.twoWeeks}</span>
          </div>
          <div className="flex justify-between items-center py-2 sm:py-2.5 border-b border-gray-200">
            <span className="text-sm sm:text-base font-semibold">3 Weeks</span>
            <span className="text-base sm:text-lg text-primary font-bold">{pricing.threeWeeks}</span>
          </div>
          <div className="flex justify-between items-center py-2 sm:py-2.5">
            <span className="text-sm sm:text-base font-semibold">
              Per Month {pricing.monthWinter ? "(Summer)" : ""}
            </span>
            <span className="text-base sm:text-lg text-primary font-bold">{pricing.month}</span>
          </div>
          {pricing.monthWinter && (
            <div className="flex justify-between items-center py-2 sm:py-2.5 border-t border-gray-200">
              <span className="text-sm sm:text-base font-semibold">Per Month (Winter)</span>
              <span className="text-base sm:text-lg text-primary font-bold">{pricing.monthWinter}</span>
            </div>
          )}
          {pricing.twoPeople && (
            <>
              <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t-2 border-gray-300">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">For 2 People:</p>
                <div className="flex justify-between items-center py-2 sm:py-2.5">
                  <span className="text-sm sm:text-base font-semibold">Per Night</span>
                  <span className="text-base sm:text-lg text-primary font-bold">{pricing.twoPeople.night}</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-2.5">
                  <span className="text-sm sm:text-base font-semibold">Per Week (extra person)</span>
                  <span className="text-base sm:text-lg text-primary font-bold">{pricing.twoPeople.week}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

