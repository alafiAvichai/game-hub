import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

import {
  FaXbox,
  FaPlaystation,
  FaApple,
  FaWindows,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const iconMap: Record<string, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  linux: FaLinux,
  mac: FaApple,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

const PlatformItemList = ({ platforms }: Props) => {
  return (
    <HStack paddingY={1}>
      {platforms.map((platform) => (
        <Icon color="gray.500" as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformItemList;
