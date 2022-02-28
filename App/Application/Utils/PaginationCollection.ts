import pagination from "./Pagination";
class PaginatedCollection<C> {
  commits: C[];
  totalCommits: number;
  perPage: number;
  currentPage: number;


  constructor(pagination: pagination, totalCommits: number, commits: C[]) {
    this.perPage = pagination.perpage;
    this.currentPage = pagination.currentpage;
    this.totalCommits = totalCommits;
    this.commits = commits;
  }

  get totalPages(): number {
    return Math.ceil(this.totalCommits / this.perPage);
  }

  getPaginatedData() {
    const paginatedData = {
      totalCommits: this.totalCommits,
      totalPages: this.totalPages,
      currentPage: this.currentPage,
      perPage: this.perPage,
      data: this.commits,
    };
    return paginatedData;
  }
}

export default PaginatedCollection;
