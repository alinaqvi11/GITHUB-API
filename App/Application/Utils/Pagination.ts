class Pagination {
    perpage: number;
    currentpage: number;

    constructor(perpage:number,currentpage:number){
        this.perpage = perpage,
        this.currentpage = currentpage
    }    
}
export default  Pagination;