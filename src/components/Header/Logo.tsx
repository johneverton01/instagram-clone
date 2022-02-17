import Image from "next/image";
import LogoLg from '../../assets/instagram-lg.png';
import LogoSm from '../../assets/insta-logo.png';

export function Logo() {
	return (
		<>
			<div className="relative hidden lg:inline-grid w-24 cursor-pointer">
				<Image src={LogoLg}
					layout="fill"
					objectFit="contain"
				/>
			</div>
			<div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
				<Image src={LogoSm}
					layout="fill"
					objectFit="contain"
				/>
			</div>
		</>
	)
}