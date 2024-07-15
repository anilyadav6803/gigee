"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { Login } from "@/components/modal/modal1";
import { Avatar } from "@mui/material";

type Props = {};

const UserMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleIconClick = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
        >
          <Login />
        </div>

        <div
          onClick={handleIconClick} // Using a separate handler for the icon click
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row gap-3 items-center rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar/>
          </div>
      
          {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm block sm:block">
              {" "}
              {/* Adjusted class */}
              <div className="flex flex-col cursor-pointer">
                <>
                  <MenuItem onClick={() => {}} label="Sign up" />
                  <MenuItem onClick={() => {}} label="Log In " />
                </>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
