// const BACKEND_URL = "http://localhost:3000";
const BACKEND_URL = "https://bbaoj8pdkv97c2v9l0sm.containers.yandexcloud.net";

const PREFERRED_LANG = navigator.language.split("-")[0];
console.log("PREFERRED_LANG", PREFERRED_LANG);
let TRANSLATION_MAP;

async function parseTranslationMap() {
	TRANSLATION_MAP = new URLSearchParams(window.location.search).get("lang");
	if (!TRANSLATION_MAP) {
		window.location.search = "?lang=en";
		return false;
	}

	const handler = {
		get(t, p, r) {
			if (t[p]) {
				return t[p];
			} else {
				return new Proxy(
					{v: p},
					{
						get(t, p, r) {
							return t.v;
						},
					}
				);
			}
		},
	};

	if (TRANSLATION_MAP == "en") {
		TRANSLATION_MAP = new Proxy({}, handler);
		console.log("TRANSLATION_MAP init 1");
		return true;
	}

	const map = await fetch("assets/" + TRANSLATION_MAP + ".json").then((v) => v.json());
	const mapObj = Object.fromEntries(map);

	TRANSLATION_MAP = new Proxy(mapObj, handler);

	console.log("TRANSLATION_MAP init 2");
	return true;
}

function defineElements() {
	class SheetSlider extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			if (this.init) {
				return;
			}
			this.init = true;

			const nameAttribute = this.getAttribute("name") ?? "default name";

			const start = this.getAttribute("start");
			const mid = this.getAttribute("mid");
			const end = this.getAttribute("end");
			let textArray;
			if (TRANSLATION_MAP[nameAttribute].text == nameAttribute) {
				textArray = this.getAttribute("text")?.split(",") ?? [""];
			} else {
				textArray = TRANSLATION_MAP[nameAttribute].text.split(",");
			}

			const div = document.createElement("div");
			const label = document.createElement("label");
			this.labelNode = document.createElement("span");
			this.labelNode.innerText = TRANSLATION_MAP[nameAttribute].name;
			if (this.getAttribute("no-label") != null) {
				this.labelNode.innerText = "";
			}
			label.appendChild(this.labelNode);
			label.appendChild(div);
			div.classList.add("bar");
			div.style.setProperty("--gradient-1", start);
			div.style.setProperty("--gradient-2", mid);
			div.style.setProperty("--gradient-3", end);
			for (const v of textArray) {
				const span = document.createElement("span");
				span.innerText = v;
				div.appendChild(span);
			}
			this.input = document.createElement("input");
			this.input.name = nameAttribute;
			if (this.getAttribute("form")) {
				this.input.setAttribute("form", this.getAttribute("form"));
			}
			this.input.addEventListener("input", this.handleInput);
			this.input.value = 0;
			this.value = 0;
			this.input.min = 0;
			this.input.max = 1;
			this.input.step = 0.0005;

			this.input.setAttribute("type", "range");
			this.input.classList.add("sheet-slider");
			div.appendChild(this.input);

			if (this.getAttribute("note") != null) {
				const note = document.createElement("div");
				note.innerHTML = this.getAttribute("note") ?? "";
				note.classList.add("input-note");
				div.appendChild(note);

				this.input.classList.add("has-note");
				this.input.style.setProperty("--note-length", note.innerText.length + "ch");
			}

			this.appendChild(label);
		}

		handleInput = () => {
			this.value = this.input.value;
			// console.log("input", this.value);
			if (this.oninput) {
				this.oninput(this.value);
			}
		};

		get value() {
			return this.input.value;
		}

		set value(v) {
			this.input.value = v;
		}
	}

	class SheetTextInput extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			if (this.init) {
				return;
			}
			this.init = true;

			const nameAttribute = this.getAttribute("name") ?? "default name";

			const div = document.createElement("div");
			const label = document.createElement("label");
			this.labelNode = document.createElement("span");
			this.labelNode.innerText = TRANSLATION_MAP[nameAttribute].name;
			label.appendChild(this.labelNode);
			label.appendChild(div);
			div.classList.add("bar");
			const input = document.createElement("input");
			input.name = nameAttribute;
			input.addEventListener("input", this.handleInput);
			this.input = input;
			input.setAttribute("type", "text");
			input.classList.add("sheet-text-input");
			if (this.getAttribute("max-length")) {
				input.setAttribute("maxlength", this.getAttribute("max-length"));
			}
			if (TRANSLATION_MAP[nameAttribute].placeholder == nameAttribute) {
				input.placeholder = this.getAttribute("placeholder") ?? "";
			} else {
				input.placeholder = TRANSLATION_MAP[nameAttribute].placeholder;
			}
			div.appendChild(input);
			if (this.getAttribute("note") != null) {
				const note = document.createElement("div");
				note.innerHTML = this.getAttribute("note") ?? "";
				note.classList.add("input-note");
				div.appendChild(note);

				input.classList.add("has-note");
				input.style.setProperty("--note-length", note.innerText.length + "ch");
			}
			this.appendChild(label);
		}

		handleInput = () => {
			this.value = this.input.value;
			if (this.oninput) {
				this.oninput(this.value);
			}
		};

		set name(v) {
			this.labelNode.innerHTML = v ?? "";
		}

		set placeholder(v) {
			this.input.placeholder = v ?? "";
		}

		get value() {
			return this.input.value;
		}

		set value(v) {
			this.input.value = v;
		}
	}

	class SheetSelect extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			if (this.init) {
				return;
			}
			this.init = true;

			const nameAttribute = this.getAttribute("name") ?? "default name";

			const div = document.createElement("div");
			const label = document.createElement("label");
			label.innerText = TRANSLATION_MAP[nameAttribute].name;
			label.appendChild(div);
			div.classList.add("bar");
			const select = document.createElement("select");
			select.addEventListener("change", this.handleChange);
			select.name = nameAttribute;
			this.input = select;
			select.classList.add("sheet-select");
			let options;
			if (TRANSLATION_MAP[nameAttribute].options == nameAttribute) {
				options = this.getAttribute("options").split(",");
			} else {
				options = TRANSLATION_MAP[nameAttribute].options.split(",");
			}
			const englishOptions = this.getAttribute("options").split(",");
			console.log(options, englishOptions);
			for (const v of options) {
				const option = document.createElement("option");
				option.value = englishOptions[options.indexOf(v)];
				option.innerText = v;
				select.appendChild(option);
			}
			div.appendChild(select);
			this.appendChild(label);
		}

		handleChange = () => {
			this.value = this.input.value;
			if (this.onchange) {
				this.onchange(this.value);
			}
		};

		get value() {
			return this.input.value;
		}

		set value(v) {
			this.input.value = v;
		}
	}

	class SheetCollapsible extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			if (this.getAttribute("align-with-fields") !== null) {
				this.classList.add("align-with-fields");
			}

			const button = document.createElement("button");
			button.setAttribute("type", "button");
			button.classList.add("collapsible-button");

			const bar1 = document.createElement("div");
			bar1.classList.add("bar");
			bar1.textContent = TRANSLATION_MAP[this.getAttribute("name") ?? ""].name;

			const bar2 = document.createElement("div");
			bar2.classList.add("bar");
			bar2.classList.add("collapsible-plus");

			const line1 = document.createElement("div");
			bar2.appendChild(line1);

			const line2 = document.createElement("div");
			bar2.appendChild(line2);

			button.appendChild(bar1);
			button.appendChild(bar2);

			const collapsibleContent = document.createElement("div");
			collapsibleContent.classList.add("collapsible-content");

			button.addEventListener("click", (ev) => {
				if (!this.classList.toggle("collapsed")) {
					setTimeout(() => {
						console.log("update height", collapsibleContent.getBoundingClientRect().height);
						this.style.setProperty("--collapsible-computed-height", collapsibleContent.scrollHeight + "px");
					}, 200);
				}
			});

			if (this.getAttribute("normally-open") == null) {
				this.classList.add("collapsed");
			}

			this.appendChild(button);
			this.appendChild(collapsibleContent);

			setTimeout(() => {
				const c = [...this.childNodes].filter((v) => {
					return !v.classList?.contains("collapsible-button") && !v.classList?.contains("collapsible-content");
				});
				collapsibleContent.append(...c);
				setTimeout(() => {
					this.style.setProperty("--collapsible-computed-height", collapsibleContent.getBoundingClientRect().height + "px");
					this.classList.add("init");
				}, 0);
			}, 0);
		}
	}

	customElements.define("sheet-slider", SheetSlider);
	customElements.define("sheet-text-input", SheetTextInput);
	customElements.define("sheet-select", SheetSelect);
	customElements.define("sheet-collapsible", SheetCollapsible);
}

function app() {
	console.log("app init");
	function fillForm(data) {
		for (const [k, v] of Object.entries(data)) {
			const el = document.querySelector(`[name="${k}"]`);
			if (el == null) {
				console.warn("no element for", k);
				continue;
			}
			el.value = v;
		}

		window.dispatchEvent(new CustomEvent("form-loaded"));
	}

	function collectFormData(form) {
		const data = new FormData(form);
		let entries = [...data.entries()];
		const set = new Set();
		for (const [key, _] of entries) {
			if (set.has(key)) {
				console.error("duplicate key", key);
				return;
			}
			set.add(key);
		}
		entries = entries.map(([k, v]) => {
			let type = null;
			switch (form[k].type) {
				case "range":
					type = "number";
					break;
				case "text":
					type = "string";
					break;
				case "select-one":
					let options = [...form[k].options].map((v) => v.text);
					type = "enum[" + options.join(",") + "]";
					break;
			}
			if (type == null) {
				console.error("unknown type", form[k].type);
				return;
			}
			return [k, v, type];
		});

		return Object.fromEntries(entries);
	}

	async function submitForm(form) {
		let data = collectFormData(form);
		// console.log(entries);
		let formKey = await fetch(BACKEND_URL, {
			method: "POST",
			body: new URLSearchParams(data),
		}).then((v) => v.text());

		const lang = new URLSearchParams(window.location.search).get("lang") ?? PREFERRED_LANG;

		document.querySelector("#submit-key").classList.remove("hidden");
		document.querySelector("#submit-key > span").innerText = "Your form is saved at: ";
		document.querySelector("#submit-key > a").innerText = formKey;
		document.querySelector("#submit-key > a").href = "?lang=" + lang + "&key=" + formKey;

		// display as type
		// const x = Object.fromEntries(entries.map(([k, v, type]) => [k, type]));
		// console.log(x);
	}

	function saveFormLocal(form) {
		let data = collectFormData(form);
		localStorage.setItem("lena-form", JSON.stringify(data));
	}

	function loadFormFromLocal(form) {
		let data = JSON.parse(localStorage.getItem("lena-form"));
		if (data == null) {
			return;
		}
		fillForm(data);
	}

	function enableInputTracking() {
		let change = true;
		// only check for changes every second
		setInterval(() => (change = true), 1000);
		const reschedule = () => {
			if (change) {
				change = false;

				saveFormLocal(document.getElementById("main-form"));
				// submitForm(document.getElementById("main-form"));
			}
		};

		for (const el of document.querySelectorAll("input")) {
			el.addEventListener("input", () => reschedule());
		}
		for (const el of document.querySelectorAll("select")) {
			el.addEventListener("change", () => reschedule());
		}
	}

	setTimeout(enableInputTracking, 0);

	async function checkFormExists(key) {
		return await fetch(BACKEND_URL + "?key=" + key).then((v) => v.ok);
	}

	document.getElementById("main-form").addEventListener("submit", (ev) => ev.preventDefault());

	let key = new URLSearchParams(window.location.search).get("key");
	if (key != null) {
		fetch(BACKEND_URL + "?key=" + key)
			.then((v) => v.json())
			.then((v) => fillForm(v))
			.catch(() => {
				console.error(`form '${key}' not found`);
			});

		document.getElementById("controls").remove();
		document.querySelectorAll("#main-form input, #main-form select").forEach((el) => (el.disabled = true));
		document.querySelectorAll("#main-form .bar").forEach((el) => el.classList.add("disabled"));
	} else {
		loadFormFromLocal(document.getElementById("main-form"));

		document.getElementById("submit-form").addEventListener("click", () => {
			submitForm(document.getElementById("main-form"));
		});
	}

	// translate static html
	document.querySelectorAll("h5").forEach((el) => {
		el.innerText = TRANSLATION_MAP["h5:" + el.innerText].text.replace("h5:", "");
	});
}

let loadFired = false;
window.addEventListener("load", () => (loadFired = true));

parseTranslationMap().then((continueInit) => {
	if (continueInit) {
		defineElements();
		if (loadFired) {
			app();
		} else {
			window.addEventListener("load", () => {
				app();
			});
		}
	} else {
		console.log("abort init");
	}
});
