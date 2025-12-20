import SharedSectionsClient from "./SharedSectionsClient";
import { transparencyTimeline, storyCards, galleryItems, donorsCount } from "@/content/impact";
import { fundraisers } from "@/content/fundraisers";
import { closedFundraisers } from "@/content/closed";
import { formatMoneyUAH } from "@/lib/format";

export default function SharedSections() {
  const totalRaised =
    fundraisers.reduce((sum, item) => sum + item.raisedAmount, 0) +
    closedFundraisers.reduce((sum, item) => sum + (item.totalRaised ?? 0), 0);

  return (
    <SharedSectionsClient
      baseData={{
        transparencyTimeline,
        storyCards,
        galleryItems,
        donorsCount,
        totalRaised: formatMoneyUAH(totalRaised),
        closedCount: closedFundraisers.length
      }}
    />
  );
}
