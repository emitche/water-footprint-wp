<?php $url = plugins_url(); ?>
<?php $plugin = "water-footprint-wp" ?>

<link rel="stylesheet" type="text/css"
  href="<?php $url ?>/<?php $plugin ?>/css/water-footprint.css" />
<script src="<?php $url ?>/<?php $plugin ?>/js/jquery-1.11.3.min.js"></script>
<script src="<?php $url ?>/<?php $plugin ?>/js/units.js"></script>
<script src="<?php $url ?>/<?php $plugin ?>/js/foods.js"></script>
<script src="<?php $url ?>/<?php $plugin ?>/js/calculator.js"></script>

<section class="water-footprint">
  <header>
    <h1>How thirsty is your food?</h1>
    <p class="instructions">Select an item below to display the amount of water used to produce the food.</p>

    <p class="credits">All water footprint statistics are from The Water Footprint Network's <a href="http://waterfootprint.org/en/resources/interactive-tools/product-gallery/" target="_blank">interactive tool</a>.</p>
  </header>

  <select class="select-item">
  </select>

  <section class="result">
    <h1 class="heading"></h1>
    <div class="bulk">
    </div>
    <div class="one-serving">
    </div>
    <div class="no-info">
    </div>
  </section>
</section>
