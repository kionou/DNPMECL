<template>
  <div>
    <div class="col-md-9">
      <select name="niveau[]" class="form-control 2col active jqmsLoaded" id="niveau" multiple="multiple"
        style="display: none;">
        <option value="BAC7 et plus">BAC+7 et plus</option>
        <option value="BAC6">BAC+6</option>
        <option value="BAC5">BAC+5</option>
        <option value="BAC4">BAC+4</option>
        <option value="BAC3">BAC+3</option>
        <option value="BAC2">BAC+2</option>
        <option value="BAC1">BAC+1</option>
        <option value="BAC0">BAC</option>
        <option value="BT">BT</option>
        <option value="Terminale">Terminale</option>
        <option value="Premiere">Première</option>
        <option value="Seconde">Seconde</option>
        <option value="BEPC">BEPC</option>
        <option value="BEP">BEP</option>
        <option value="BP">BP</option>
        <option value="Troisieme">Troisième</option>
        <option value="Quatrieme">Quatrième</option>
        <option value="Cinquieme">Cinquième</option>
        <option value="Sixieme">Sixième</option>
        <option value="CAP">CAP</option>
        <option value="CEPE">CEPE</option>
        <option value="CM2">CM2</option>
      </select>
      <div class="ms-options-wrap" style="position: relative;"><button>BAC+7 et plus, BAC+6, BAC+5</button>
        <div class="ms-options" style="min-height: 200px; overflow: auto; display: none; max-height: 200px;">
          <div class="ms-search"><input type="text" value="" placeholder="Recherche un niveau"></div>
          <ul style="column-gap: 0px;">
            <li class="selected"><label for="ms-opt-162" style="padding-left: 23px;"><input type="checkbox"
                  value="BAC7 et plus" title="BAC+7 et plus" id="ms-opt-162">BAC+7 et plus</label></li>
            <li class="selected"><label for="ms-opt-163" style="padding-left: 23px;"><input type="checkbox" value="BAC6"
                  title="BAC+6" id="ms-opt-163">BAC+6</label></li>
            <li class="selected"><label for="ms-opt-164" style="padding-left: 23px;"><input type="checkbox" value="BAC5"
                  title="BAC+5" id="ms-opt-164">BAC+5</label></li>
            <li class=""><label for="ms-opt-165" style="padding-left: 23px;"><input type="checkbox" value="BAC4"
                  title="BAC+4" id="ms-opt-165">BAC+4</label></li>
            <li class=""><label for="ms-opt-166" style="padding-left: 23px;"><input type="checkbox" value="BAC3"
                  title="BAC+3" id="ms-opt-166">BAC+3</label></li>
            <li class=""><label for="ms-opt-167" style="padding-left: 23px;"><input type="checkbox" value="BAC2"
                  title="BAC+2" id="ms-opt-167">BAC+2</label></li>
            <li class=""><label for="ms-opt-168" style="padding-left: 23px;"><input type="checkbox" value="BAC1"
                  title="BAC+1" id="ms-opt-168">BAC+1</label></li>
            <li class=""><label for="ms-opt-169" style="padding-left: 23px;"><input type="checkbox" value="BAC0"
                  title="BAC" id="ms-opt-169">BAC</label></li>
            <li class=""><label for="ms-opt-170" style="padding-left: 23px;"><input type="checkbox" value="BT" title="BT"
                  id="ms-opt-170">BT</label></li>
            <li class=""><label for="ms-opt-171" style="padding-left: 23px;"><input type="checkbox" value="Terminale"
                  title="Terminale" id="ms-opt-171">Terminale</label></li>
            <li class=""><label for="ms-opt-172" style="padding-left: 23px;"><input type="checkbox" value="Premiere"
                title="Première" id="ms-opt-172">Première</label></li>
          <li class=""><label for="ms-opt-173" style="padding-left: 23px;"><input type="checkbox" value="Seconde"
                title="Seconde" id="ms-opt-173">Seconde</label></li>
          <li class=""><label for="ms-opt-174" style="padding-left: 23px;"><input type="checkbox" value="BEPC"
                title="BEPC" id="ms-opt-174">BEPC</label></li>
          <li class=""><label for="ms-opt-175" style="padding-left: 23px;"><input type="checkbox" value="BEP"
                title="BEP" id="ms-opt-175">BEP</label></li>
          <li class=""><label for="ms-opt-176" style="padding-left: 23px;"><input type="checkbox" value="BP" title="BP"
                id="ms-opt-176">BP</label></li>
          <li class=""><label for="ms-opt-177" style="padding-left: 23px;"><input type="checkbox" value="Troisieme"
                title="Troisième" id="ms-opt-177">Troisième</label></li>
          <li class=""><label for="ms-opt-178" style="padding-left: 23px;"><input type="checkbox" value="Quatrieme"
                title="Quatrième" id="ms-opt-178">Quatrième</label></li>
          <li class=""><label for="ms-opt-179" style="padding-left: 23px;"><input type="checkbox" value="Cinquieme"
                title="Cinquième" id="ms-opt-179">Cinquième</label></li>
          <li class=""><label for="ms-opt-180" style="padding-left: 23px;"><input type="checkbox" value="Sixieme"
                title="Sixième" id="ms-opt-180">Sixième</label></li>
          <li class=""><label for="ms-opt-181" style="padding-left: 23px;"><input type="checkbox" value="CAP"
                title="CAP" id="ms-opt-181">CAP</label></li>
          <li class=""><label for="ms-opt-182" style="padding-left: 23px;"><input type="checkbox" value="CEPE"
                title="CEPE" id="ms-opt-182">CEPE</label></li>
          <li class=""><label for="ms-opt-183" style="padding-left: 23px;"><input type="checkbox" value="CM2"
                title="CM2" id="ms-opt-183">CM2</label></li>
        </ul>
      </div>
    </div>
  </div>
</div></template>
  
<script>
export default {
  data() {
    return {
      years: [],
      selectedYear: null,
    };
  },
  mounted() {
    // Récupérez l'année en cours
    const currentYear = new Date().getFullYear();

    // Générez la liste des années de 1960 à l'année en cours
    for (let year = 1960; year <= currentYear; year++) {
      this.years.push(year);
    }

    // Définissez l'année actuelle comme valeur par défaut du champ de sélection
    this.selectedYear = currentYear;
  },
};
</script>
<style lang="css" scoped>
.col-md-9{

  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 14px;
    color: #333333;
    line-height: 1.42857143;
    box-sizing: border-box;
    float: left;
    width: 75%;
    position: relative;
    min-height: 1px;
    padding-right: 5px;
    padding-left: 5px;
}
   
</style>