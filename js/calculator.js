var UNITS;
// UNITS = "metric";
UNITS = "us";

var base_unit = "litre";
var display_unit = "gallon";

var L_TO_GAL = 0.264172052358;
var KG_TO_LB = 2.205;

$.each(foods, function(food, food_info) {
  if (food_info.water_use.water_litres) {
    $('.select-item').append(
      "<option class='item " + food + "' value='" + food + "'>"
      + food_info.food_name +
      "</option>"
    );
  }
});

function convert_units(n) {
  if (UNITS == "us") {
    convert_to_us_units(n);
  }

  return n;
}

function convert_to_us_units(n) {
  // n = convert_litre_to_gallon(n)
  // n = n / KG_TO_LB;
  n = n * L_TO_GAL / KG_TO_LB;
  n = Math.round(n);
  return n;
}

function convert_litre_to_gallon(n) {
  n = n * L_TO_GAL;
  n = Math.round(n);
  return n;
}

function convert_kg_to_lb(n) {
  n = n / KG_TO_LB;
  n = Math.round(n);
  return n;
}

function food_water_use(food_unit, water_amount, water_unit) {
  text = "<div class='bulk-readout'><p class='water-amount'>" + water_amount + " " + water_unit + " " + of_water + "</p><p>is used to produce " + 1 + " " + food_unit + "</p></div>";
  return text;
}

function serving_water_use(serving, serving_amount, serving_unit, water_amount, water_unit) {
  text = "<div class='serving-readout'><p>" + serving + " (" + serving_amount + " " + serving_unit + ")</p>" + "<p>" + water_amount + " " + water_unit + " " + of_water + "</p></div>";
  return text;
}

function reset_content() {
  $(".result .heading").html("");
  $(".result .bulk-volume").html("");
  $(".result .bulk-weight").html("");
  $(".result .one-serving").html("");
}

// Display water use on user selection

$('.select-item').on('change', function (e) {
  reset_content();
  var choices = this;
  var item_key = $(choices).val();

  var item = foods[item_key];
  var litre_info = item.water_use.water_litres;

  $(".result .heading").html(item.food_name);

  var result;

  if (litre_info) {
    if (litre_info.per_kg) {
      var bulk_gallons_lbs = food_water_use("lb", convert_to_us_units(litre_info.per_kg), "gallons");
      $(".result .bulk-weight").html(bulk_gallons_lbs);
    }

    if (litre_info.per_litre) {
      var bulk_gallons_gallons = food_water_use("gallon", convert_litre_to_gallon(litre_info.per_litre), "gallons");
      $(".result .bulk-volume").html(bulk_gallons_gallons);
    }

    if (litre_info.per_serving) {
      // var serving_gallons = serving_water_use(litre_info.serving.description, )
      // console.log("There is serving info");
      // $(".result .one-serving").html("There is serving info.");
    }
  } else {
    $(".result .no-info").html("<p>No information available.</p>");
  }
});
