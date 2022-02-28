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

  hasNext(): boolean {
    return this.currentPage < this.totalPages;
  }
  hasPrev(): boolean {
    return this.currentPage > 1 && this.currentPage <= this.totalPages;
  }

  getPaginatedData() {
    const paginatedData = {
      totalCommits: this.totalCommits,
      totalPages: this.totalPages,
      currentPage: this.currentPage,
      perPage: this.perPage,
      previousPage: this.hasPrev(),
      nextPage: this.hasNext(),
      data: this.commits,
    };
    return paginatedData;
  }
}

export default PaginatedCollection;
