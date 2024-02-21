<template lang="">
<div class="wrapper">
 
  <div class="sample">
  
    <div id='custom-select-status' class='hidden-visually' aria-live="polite"></div>
    <div class="custom-select" id="myCustomSelect">
      <input type="text" id="custom-select-input" class="select-css" v-model="selectedYear">
      <span class="custom-select-icons">
        <i class="bi bi-caret-down"></i>
       								
					</span>
      <ul class="custom-select-options hidden-all" id="custom-select-list">
        <li v-for="partenaire in yearOptions" :key="partenaire.id"> {{partenaire.label}}</li>
       
      </ul>
    </div>
  </div>

</div>
</template>
<script>
export default {

  data() {
    return {
      years: [],
      yearOptions: [],
      selectedYear: new Date().getFullYear().toString(),
    }
  },

async  mounted() {
    await  this.initializeYears()

// assign names to things we'll need to use more than once
const csSelector = document.querySelector('#myCustomSelect') // the input, svg and ul as a group
const csInput = csSelector.querySelector('input')
const csList = csSelector.querySelector('ul')
const csOptions = csList.querySelectorAll('li')
const csIcons = csSelector.querySelectorAll('i')
const csStatus = document.querySelector('#custom-select-status')
const aOptions = Array.from(csOptions)

// when JS is loaded, set up our starting point
// if JS fails to load, the custom select remains a plain text input
// create and set start point for the state tracker
let csState = "initial"
// inform assistive tech (screen readers) of the names & roles of the elements in our group
csSelector.setAttribute('role', 'combobox') 
csSelector.setAttribute('aria-haspopup', 'listbox') 
csSelector.setAttribute('aria-owns', 'custom-select-list') // container owns the list...
csInput.setAttribute('aria-autocomplete', 'both') 
csInput.setAttribute('aria-controls', 'custom-select-list') // ...but the input controls it
csList.setAttribute('role', 'listbox') 
csOptions.forEach(function(option) {
	option.setAttribute('role', 'option') 
	option.setAttribute('tabindex', "-1")  // make li elements keyboard focusable by script only
})
// set up a message to keep screen reader users informed of what the custom input is for/doing
csStatus.textContent = csOptions.length + " options available. Arrow down to browse or start typing to filter."

// EVENTS
// /////////////////////////////////
csSelector.addEventListener('click', function(e) {
	const currentFocus = findFocus()
	switch(csState) {
		case 'initial' : // if state = initial, toggleOpen and set state to opened
			toggleList('Open')
			setState('opened')
			break
		case 'opened':
			// if state = opened and focus on input, toggleShut and set state to initial
			if (currentFocus === csInput) {
				toggleList('Shut')
				setState('initial')
			} else if (currentFocus.tagName === 'LI') {
				// if state = opened and focus on list, makeChoice, toggleShut and set state to closed
				makeChoice(currentFocus)
				toggleList('Shut')
				setState('closed')
			}
			break
		case 'filtered':
			// if state = filtered and focus on list, makeChoice and set state to closed
			if (currentFocus.tagName === 'LI') {
				makeChoice(currentFocus)
				toggleList('Shut')
				setState('closed')
			} // if state = filtered and focus on input, do nothing (wait for next user input)

			break
		case 'closed': // if state = closed, toggleOpen and set state to filtered? or opened?
			toggleList('Open')
			setState('filtered')
			break
	}
})

csSelector.addEventListener('keyup', function(e) {
	doKeyAction(e.key)
})

document.addEventListener('click', function(e) {
	if (!e.target.closest('#myCustomSelect')) {
		// click outside of the custom group
		toggleList('Shut')
		setState('initial')
	} 
})

// FUNCTIONS 
// /////////////////////////////////

function toggleList(whichWay) {
	if (whichWay === 'Open') {
		csList.classList.remove('hidden-all')
		csSelector.setAttribute('aria-expanded', 'true')
	} else { // === 'Shut'
		csList.classList.add('hidden-all')
		csSelector.setAttribute('aria-expanded', 'false')
	}
}

function findFocus() {
	const focusPoint = document.activeElement
	return focusPoint
}

function moveFocus(fromHere, toThere) {
	// grab the currently showing options, which might have been filtered
	const aCurrentOptions = aOptions.filter(function(option) {
		if (option.style.display === '') {
			return true
		}
	})
	// don't move if all options have been filtered out
	if (aCurrentOptions.length === 0) {
		return
	}
	if (toThere === 'input') {
		csInput.focus()
	}
	// possible start points
	switch(fromHere) {
		case csInput:
			if (toThere === 'forward') {
				aCurrentOptions[0].focus()
			} else if (toThere === 'back') {
				aCurrentOptions[aCurrentOptions.length - 1].focus()
			}
			break
		case csOptions[0]: 
			if (toThere === 'forward') {
				aCurrentOptions[1].focus()
			} else if (toThere === 'back') {
				csInput.focus()
			}
			break
		case csOptions[csOptions.length - 1]:
			if (toThere === 'forward') {
				aCurrentOptions[0].focus()
			} else if (toThere === 'back') {
				aCurrentOptions[aCurrentOptions.length - 2].focus()
			}
			break
		default: // middle list or filtered items 
			const currentItem = findFocus()
			const whichOne = aCurrentOptions.indexOf(currentItem)
			if (toThere === 'forward') {
				const nextOne = aCurrentOptions[whichOne + 1]
				nextOne.focus()
			} else if (toThere === 'back' && whichOne > 0) {
				const previousOne = aCurrentOptions[whichOne - 1]
				previousOne.focus()
			} else { // if whichOne = 0
				csInput.focus()
			}
			break
	}
}

function doFilter() {
	const terms = csInput.value
	const aFilteredOptions = aOptions.filter(function(option) {
		if (option.innerText.toUpperCase().startsWith(terms.toUpperCase())) {
			return true
		}
	})
	csOptions.forEach(option => option.style.display = "none")
	aFilteredOptions.forEach(function(option) {
		option.style.display = ""
	})
	setState('filtered')
	updateStatus(aFilteredOptions.length)
}

function updateStatus(howMany) {
	csStatus.textContent = howMany + " options available."
}

function makeChoice(whichOption) {
	csInput.value = whichOption.innerText
	moveFocus(document.activeElement, 'input')
	// update aria-selected, if using
}

function setState(newState) {
	switch (newState) {
		case 'initial': 
			csState = 'initial'
			break
		case 'opened': 
			csState = 'opened'
			break
		case 'filtered':
			csState = 'filtered'
			break
		case 'closed': 
			csState = 'closed'
	}
	// console.log({csState})
}

function doKeyAction(whichKey) {
	const currentFocus = findFocus()
	switch(whichKey) {
		case 'Enter':
			if (csState === 'initial') { 
				// if state = initial, toggleOpen and set state to opened
				toggleList('Open')
				setState('opened')
			} else if (csState === 'opened' && currentFocus.tagName === 'LI') { 
				// if state = opened and focus on list, makeChoice and set state to closed
				makeChoice(currentFocus)
				toggleList('Shut')
				setState('closed')
			} else if (csState === 'opened' && currentFocus === csInput) {
				// if state = opened and focus on input, close it
				toggleList('Shut')
				setState('closed')
			} else if (csState === 'filtered' && currentFocus.tagName === 'LI') {
				// if state = filtered and focus on list, makeChoice and set state to closed
				makeChoice(currentFocus)
				toggleList('Shut')
				setState('closed')
			} else if (csState === 'filtered' && currentFocus === csInput) {
				// if state = filtered and focus on input, set state to opened
				toggleList('Open')
				setState('opened')
			} else { // i.e. csState is closed, or csState is opened/filtered but other focus point?
				// if state = closed, set state to filtered? i.e. open but keep existing input? 
				toggleList('Open')
				setState('filtered')
			}
			break

		case 'Escape':
			// if state = initial, do nothing
			// if state = opened or filtered, set state to initial
			// if state = closed, do nothing
			if (csState === 'opened' || csState === 'filtered') {
				toggleList('Shut')
				setState('initial')
			}
			break

		case 'ArrowDown':
			if (csState === 'initial' || csState === 'closed') {
				// if state = initial or closed, set state to opened and moveFocus to first
				toggleList('Open')
				moveFocus(csInput, 'forward')
				setState('opened')
			} else {
				// if state = opened and focus on input, moveFocus to first
				// if state = opened and focus on list, moveFocus to next/first
				// if state = filtered and focus on input, moveFocus to first
				// if state = filtered and focus on list, moveFocus to next/first
				toggleList('Open')
				moveFocus(currentFocus, 'forward')
			} 
			break
		case 'ArrowUp':
			if (csState === 'initial' || csState === 'closed') {
				// if state = initial, set state to opened and moveFocus to last
				// if state = closed, set state to opened and moveFocus to last
				toggleList('Open')
				moveFocus(csInput, 'back')
				setState('opened')
			} else {
				// if state = opened and focus on input, moveFocus to last
				// if state = opened and focus on list, moveFocus to prev/last
				// if state = filtered and focus on input, moveFocus to last
				// if state = filtered and focus on list, moveFocus to prev/last
				moveFocus(currentFocus, 'back')
			}
			break 
		default:
			if (csState === 'initial') {
				// if state = initial, toggle open, doFilter and set state to filtered
				toggleList('Open')
				doFilter()
				setState('filtered')
			} else if (csState === 'opened') {
				// if state = opened, doFilter and set state to filtered
				doFilter()
				setState('filtered')
			} else if (csState === 'closed') {
				// if state = closed, doFilter and set state to filtered
				doFilter()
				setState('filtered')
			} else { // already filtered
				doFilter()
			}
			break 
	}
}
  },

  methods: {
    initializeYears() {
            const currentYear = new Date().getFullYear();
            for (let year = 1900; year <= currentYear; year++) {
                this.years.push(year);
            }
            this.yearOptions = this.years.map(year => ({
                label: String(year),
                value: String(year)
            }));

            this.selectedYear = currentYear.toString();
        },
  },
  
}
</script>
<style lang="css" scoped>

body {
  font-family: sans-serif;
  background: #eeeeee;
}

.custom-select {
  position: relative;
}
.select-css {
  display: block;
  font-size: 1em;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 1.3;
  width: 100%;
  max-width: 100%;

  margin: 0;


  appearance: none;
  background-color: #fff;
  position: relative;
  z-index: 10;
  border-radius: 0.5rem!important;
    border: 2px solid #e5e7eb;
    outline: 0;
    padding: 14px;
    color: #030305;
}
.select-css::-ms-expand {
  display: none;
}

.select-css:focus {
  border: 2px solid var(--color-primary);
  color: #222;
  outline: none;
}
.custom-select-icons {
  position: absolute;
  top: 16px;
  right: 0.5em;
  z-index: 20;
  border: 1px solid white;
  background: transparent;
}
.custom-select-options {
  border: 1px solid #aaa;
  border-radius: 0 0 0.25em 0.25em;
  line-height: 1.5;
  margin: 0;
  margin-top: -0.5em;
  padding: 0;
  list-style-type: none;
  font-weight: normal;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  width: calc(100% - 1px);
  background-color: #ffffff;
  height: 270px;
    width: 170px;
    overflow: auto;
}
.custom-select-options li {
  padding: 0.6em;
}
.custom-select-options li:hover {
  background: var(--color-primary);
  color: #fff;
  border: 1px solid var(--color-primary);
  border-width: 0 0 0 1px;
}

.custom-select-options li:focus {
  border: 1px solid blue;
}
.icon {
  fill: ButtonText;
  pointer-events: none;
}
@media screen and (-ms-high-contrast: active) {
  .icon {
    fill: ButtonText;
  }
}
.hidden-all {
  display: none;
}
.hidden-visually {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  border: 0;
}

  
</style>