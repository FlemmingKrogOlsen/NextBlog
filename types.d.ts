type Meta = {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    tags: string[];
    image: string;
    price: string;
    areal: string;
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>
}