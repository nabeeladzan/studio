import { Avatar } from "@/components/orbit/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CaretDown, Gear, ToggleLeft, ToggleRight } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { localSettingDialog } from "./local-setting-dialog";

export default function NavigationProfile() {
  const { resolvedTheme, forcedTheme, setTheme } = useTheme();
  const theme = forcedTheme ?? resolvedTheme;

  const onThemeToggleClicked = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setTheme(theme === "dark" ? "light" : "dark");

      // We don't want the dropdown to close
      e.stopPropagation();
      e.preventDefault();
    },
    [theme, setTheme],
  );

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <div
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "ghost",
            }),
            "flex items-center justify-start gap-2 p-1",
          )}
        >
          <Avatar username="Guest" as="div" />
          <div className="flex-1 text-left text-sm">Guest</div>
          <div>
            <CaretDown weight="bold" className="h-3 w-3" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[250px]">
        <div className="flex gap-2 border-b p-2">
          <Avatar size="lg" username="Guest" />

          <div className="flex flex-col justify-center">
            <div className="text-sm font-semibold">Guest</div>
          </div>
        </div>

        <div className="p-2">
          <DropdownMenuItem
            className="justify-between"
            onClick={() => {
              localSettingDialog.show({}).then().catch();
            }}
          >
            Local Setting
            <Gear size={20} />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="justify-between"
            onClick={onThemeToggleClicked}
          >
            Theme
            {theme === "dark" ? (
              <ToggleRight weight="fill" size={20} />
            ) : (
              <ToggleLeft size={20} />
            )}
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
