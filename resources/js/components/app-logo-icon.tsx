import { SVGAttributes } from 'react';
import {ImgHTMLAttributes} from 'react';
export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (


        <img
        {...props}
        src = '/imgs/pay.png'
        alt = "My Logo"
        />
    
    );
}
