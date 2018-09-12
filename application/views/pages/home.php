

        <!-- Page Content  -->
      
           
<div class='bodyContainer'>
            <h2>Welcome to Home</h2>
            <div class="container">
                <div class="row">
                      <div class="col-md-3 col-sm-6 progressBar">
                           <div class="progress green">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                     <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">90%</div>
                             </div>
                        </div>
                    </div>
            </div>

            <div class="line"></div>

            <canvas id="myChart" width="400" height="400"></canvas>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<script>
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Day 0", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(50,165,55)',
                
            ],
            borderColor: [
                'rgb(0,111,5)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>
   

