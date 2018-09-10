

  </div>
        </div>

<div class="overlay"></div>


<script type="text/javascript" src="<?php echo base_url("assets/js/jquery.js"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/js/popper.min.js"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/js/bootstrap.js"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/js/jquery.mCustomScrollbar.concat.min.js"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/js/jquery.mobile.custom.min.js"); ?>"></script>


    <script type="text/javascript">
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });

     $( document ).ready(function() {
         $( document ).on( "swipeleft swiperight", function( e ) {
        
        if (!($( ".overlay" ).hasClass('active'))) {
            if ( e.type === "swiperight" ) {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
           
            }
        }
    });
});
    </script>

</body>
</html>