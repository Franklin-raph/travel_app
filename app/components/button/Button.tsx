import Image from "next/image";

type ButtonProps = {
    type:"button" | "submit";
    title:string;
    icon?: string;
    design: string
}

const Button = ({type, title, icon, design}: ButtonProps) => {
  return (
    <button className={design} type={type}>
        {icon && <Image src={icon} alt={title} width={18} height={18}/> }
        <label className="cursor-pointer">{title}</label>
    </button>
  )
}

export default Button