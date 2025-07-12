import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/Components/ui/command.tsx";
const Searchbar = () => {
  return (
    <div>
      <Command className="w-80 flex justify-center items-center">
        <CommandInput placeholder="Search..." />
        <CommandList>
          
        </CommandList>
      </Command>

    </div>
  );
};
export default Searchbar;
