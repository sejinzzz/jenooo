$("#select").change(function() {
    var selectedValue = $(this).val();
    if (selectedValue === "dream") {
      window.location.href = "index.html";
    } else if (selectedValue === "nct") {
      window.location.href = "golden_age.html";
    }else if (selectedValue === "nct_v2") {
        window.location.href = "nct.html";
    }
});