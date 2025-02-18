import WatchedItem from "./watched-item";
import { ScrollArea } from "../ui/scroll-area";
import { Watched } from "@/types/watched";

export default function WatchedList({
  watcheds,
}: {
  watcheds: Watched[];
}) {

  return (
    <div className="w-full">
      <ScrollArea className="h-[480px] w-full">
        <div>
          {watcheds?.map((watched, index) => (
            <WatchedItem key={index} watched={watched} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
