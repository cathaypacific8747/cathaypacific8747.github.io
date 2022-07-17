interface Author {
    name: string;
    url: string;
}

interface License {
    name: string;
    url: string;
}

interface DownloadItem {
    display: string;
    lastModified: string;
    src: string;
}

interface Downloads {
    latest: DownloadItem[];
    others: DownloadItem[];
}

interface PaperDetail {
    title: string;
    authors: Author[];
    published: string;
    license: License;
    doi?: string;
    abstract?: string;
    information: string;
    downloads: Downloads;
}

export { PaperDetail };