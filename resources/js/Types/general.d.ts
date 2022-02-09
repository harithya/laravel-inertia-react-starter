import { PropsWithChildren, ReactElement } from "react";

export interface InertiaPage<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    layout: (children: JSX.Element) => JSX.Element;
}


export interface PaginationProps<P={}> {
  current_page: number;
  data: P[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: LinkPaginationProps[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

export interface LinkPaginationProps {
  url?: string;
  label?: string;
  active?: boolean;
}
