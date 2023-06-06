import { PropsWithChildren } from "react";
import { ISocialMediaProps } from "./types";

import * as Styled from "./styles";

export default function SocialMedia({ url, children }:PropsWithChildren<ISocialMediaProps>) {

    const getBackground = () => {
        if (url === "https://github.com/dv-script") {
          return "#6e5494";
        } return "#60a5fa";
      };

    return (
        <Styled.SocialMediaLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
            <Styled.SocialMediaSpan style={{backgroundColor:getBackground()}}/>
        </Styled.SocialMediaLink>
    )
}