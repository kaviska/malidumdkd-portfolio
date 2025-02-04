export interface ButtonProps{
    title:string;
    onClick?:()=>void;
    className?:string;
    icon?:string;
    iconTwo?:string;
}

export interface TechProps{
    tech:string;
    className:string;
}

export interface TechnologyProps{
    icon:string;
}
export interface TimelineProps{
    dotImage:string;
    role:string;
    company:string;
    logo:string;
    date:string;
    descripition: string[]; // Correct spelling to `description`
}
export interface ProjectCardProps{
    image:string;
    name:string;
    workedOn:string[]; 
    Technology:string[];
    details:string;
    link:string;
    color:string;
}