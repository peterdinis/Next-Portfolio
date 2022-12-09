import Image from "next/image";
import pgLogo from "../../images/pg.png";
import queryLogo from "../../images/query.svg";
import nativeLogo from "../../images/native.png";
import typescriptLogo from "../../images/typescript.png";
import jestLogo from "../../images/jest.png";
import djangoLogo from "../../images/django-logo.png";
import expressLogo from "../../images/express.png";
import reactLogo from "../../images/react.png";
import nestjsLogo from "../../images/nestjs.svg";

export default function Images() {
  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 mt-2">
        <Image src={pgLogo} alt={"FOO"} width={300} height={300} />
        <Image src={queryLogo} alt={"FOO"} width={300} height={300} />
        <Image src={nativeLogo} alt={"FOO"} width={300} height={300} />
        <Image src={typescriptLogo} alt={"FOO"} width={300} height={300} />
        <Image src={jestLogo} alt={"FOO"} width={300} height={300}/>
        <Image src={djangoLogo} alt={"FOO"} width={300} height={300} />
        <Image src={expressLogo} alt={"FOO"} width={300} height={300} />
        <Image src={reactLogo} alt={"FOO"} width={300} height={300} />
        <Image src={nestjsLogo} alt={"FOO"} width={300} height={300} />
    </div>
  );
}
