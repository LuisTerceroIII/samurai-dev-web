export default interface NavBarProps {
    options: option[]
}

interface option {
    option: string;
    redirect: string; // url to link
}