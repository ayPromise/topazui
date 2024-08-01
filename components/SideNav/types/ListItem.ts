type ListItem = {
    title: React.ReactNode;
    addContent?: string;
    path?: string;
    action?: () => void;
    icon?:React.ReactNode;
}

export default ListItem