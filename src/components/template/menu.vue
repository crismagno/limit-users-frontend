<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="" class="brand-link">
      <img src="@/assets/images/face-cris.jpg" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8" />
      <span class="brand-text font-weight-light">Cristhofer</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <!-- <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="@/assets/images/face-cris.jpg" class="img-circle elevation-2" alt="User Image" />
        </div>
        <div class="info">
          <a href="#" class="d-block">Cristhofer</a>
        </div>
      </div>  -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->
          <li class="nav-item has-treeview">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link tag="a" to="/admin/clockpicker" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Clockpicker</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" to="/admin/content" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Teste-Content</p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="/admin/addintegrations" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Add Integrations</p>
                </a>
              </li>
            </ul>
          </li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {};
</script>

<style>
</style>