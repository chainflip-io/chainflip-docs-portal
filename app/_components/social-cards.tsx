// CardsLayout.tsx
import GithubIcon from "public/assets/logo-github.svg?svgr";
import DiscordIcon from "public/assets/logo-discord.svg?svgr";
import TelegramIcon from "public/assets/logo-telegram.svg?svgr"
import XIcon from "public/assets/logo-x.svg?svgr";
import React, {ReactElement} from "react";
import cn from "clsx";
import styles from "private-next-root-dir/app/_components/features/style.module.css";

interface CardProps {
    Icon: ReactElement;
    title: string;
    description: string;
    href: string;
}

const SocialCard: React.FC<CardProps> = ({ Icon, title, description, href }) => {
    return (
        <a href={href} rel="noopener noreferrer" className="flex items-center p-4 rounded-2xl shadow-md bg-neutral-100 border-1 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 cursor-pointer hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-800 transition-shadow duration-300 ease-in-out">
            {/* Icon */}
            <div className="h-12 w-12 flex items-center justify-center rounded-xl text-black dark:text-neutral-200">
                {Icon}
            </div>

            {/* Centered Text */}
            <div className="h-16 ms-4 flex flex-col justify-center">
                <h4 className="text-lg font-semibold">{title}</h4>
                <h6 className="text-sm sm:text-xs overflow-hidden text-ellipsis line-clamp-2">{description}</h6>
            </div>
        </a>
    );
};

const SocialCards: React.FC<{className?: string}> = ({className}) => {
    return (
        <div className={cn('p-6 space-y-6', className)}>
            {/* Row of three cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3">
                <SocialCard
                    Icon={<GithubIcon/>}
                    title="Github"
                    description="View all Chainflip repositories"
                    href="https://github.com/chainflip-io"
                />
                <SocialCard
                    Icon={<TelegramIcon/>}
                    title="Telegram"
                    description="Join our Telegram group for LPs"
                    href="https://t.me/chainflip_lp"
                />
                <SocialCard
                    Icon={<DiscordIcon/>}
                    title="Discord"
                    description="Join our Developer Community on Discord"
                    href="https://discord.gg/chainflip-community"
                />
            </div>

            {/* Full-width big card */}
            <div className="w-full mx-auto">
                <SocialCard
                    Icon={<XIcon/>}
                    title="X Account"
                    description="Follow Chainflip Labs on X/Twitter for the latest updates on the protocol and ecosystem"
                    href="https://twitter.com/Chainflip"
                />
            </div>

        </div>
    );
};

export default SocialCards;
