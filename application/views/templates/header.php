<html lang="en">
<head>

	<title>APP</title>
	<link rel="stylesheet" href="<?php echo base_url("assets/css/bootstrap.css"); ?>" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/style.css"); ?>" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/jquery.mCustomScrollbar.min.css"); ?>" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/jquery.mobile.custom.theme.min.css"); ?>" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/jquery.mobile.custom.structure.min.css"); ?>" />

	<script defer src="<?php echo base_url("assets/js/solid.min.js"); ?>"></script>
    <script defer src="<?php echo base_url("assets/js/fontawesome.min.js"); ?>"></script>

    <script src="<?php echo base_url("assets/js/Chart.bundle.min.js"); ?>"></script>
   


	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

</head>
<body>

<div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div id="dismiss">
                <i class="fas fa-arrow-left"></i>
            </div>

            <div class="sidebar-header">
                <h3>kardia</h3>
            </div>

            <ul class="list-unstyled components">

            
                <li class="active">
                    <a href="#homeSubmenu"><i class="fas fa-home"></i> Home</a>
                   
                </li>
               
                <li>
                    <a href="#"><i class="fas fa-chart-bar"></i> Report</a>
                </li>
               
                <li>
                    <a href="#"><i class="fas fa-bell"></i> Reminder</a>
                </li>
                
                <li>
                    <a href="#"><i class="fas fa-utensils"></i> Meal Plans</a>
                </li>

                <li>
                    <a href="#"><i class="fas fa-cog"></i> Setting</a>
                </li>

                 <li>
                    <a href="#"><i class="fas fa-question"></i> About</a>
                                       
                </li>
            </ul>

            
        </nav>

  <div id="content">
                <button type="button" id="sidebarCollapse" class="btn">
                    <!-- <i class="fas fa-align-left"></i> -->
                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </button> 