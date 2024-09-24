export class SidenavService {
    isExpanded = true;
  
    toggleSidenav() {
      this.isExpanded = !this.isExpanded;
    }
  
    expandSidenav() {
      this.isExpanded = true;
    }
  
    collapseSidenav() {
      this.isExpanded = false;
    }
  }