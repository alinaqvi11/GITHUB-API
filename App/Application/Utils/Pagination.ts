class Pagination {
    perpage: number;
    currentpage: number;
    currentPage: any;

    constructor(perpage:number,currentpage:number){
        this.perpage = perpage,
        this.currentpage = currentpage
    }    
}
export default  Pagination;