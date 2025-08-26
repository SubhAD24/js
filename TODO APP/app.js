// --- Helper functions ---
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const STORAGE_KEY = "todo.items.v1";
let items = load();
let filter = "all";

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function uid() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);
}

// --- Render ---
const list = $("#list");
const empty = $("#empty");
const count = $("#count");

function render() {
  list.innerHTML = "";
  const visible = items.filter((it) =>
    filter === "all" ? true : filter === "done" ? it.done : !it.done
  );
  if (visible.length === 0) {
    list.append(empty);
    empty.hidden = false;
  } else {
    empty.hidden = true;
    visible.forEach(addItemRow);
  }
  const activeCount = items.filter((i) => !i.done).length;
  count.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
}

function addItemRow(it) {
  const li = document.createElement("li");
  li.className = "todo" + (it.done ? " done" : "");
  li.dataset.id = it.id;

  const ck = Object.assign(document.createElement("input"), {
    type: "checkbox",
    className: "ck",
    checked: it.done,
    title: "Mark complete",
  });
  ck.addEventListener("change", () => toggle(it.id));

  const label = document.createElement("div");
  label.className = "label";
  const title = document.createElement("div");
  title.className = "title";
  title.textContent = it.title;
  label.append(title);

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = actionBtn("✎", "Edit (E)", () => edit(it.id));
  const delBtn = actionBtn("🗑", "Delete (Del)", () => remove(it.id, li));

  actions.append(editBtn, delBtn);

  li.append(ck, label, actions);

  // keyboard shortcuts per-row
  li.addEventListener("keydown", (e) => {
    if (e.key === "e" || e.key === "E") {
      e.preventDefault();
      edit(it.id);
    }
    if (e.key === "Delete") {
      e.preventDefault();
      remove(it.id, li);
    }
    if (e.key === " ") {
      e.preventDefault();
      ck.click();
    }
  });
  li.tabIndex = 0; // make row focusable

  // Animate item entry
  li.classList.add("fade-in");

  list.append(li);
}

function actionBtn(symbol, title, onClick) {
  const b = document.createElement("button");
  b.className = "icon-btn";
  b.title = title;
  b.setAttribute("aria-label", title);
  b.textContent = symbol;
  b.addEventListener("click", onClick);
  return b;
}

// --- Actions ---
function add(title) {
  const t = title.trim();
  if (!t) return;
  items.unshift({ id: uid(), title: t, done: false, createdAt: Date.now() });
  save();
  render();
}

function toggle(id) {
  const it = items.find((i) => i.id === id);
  if (!it) return;
  it.done = !it.done;
  save();
  render();
}

function edit(id) {
  const li = list.querySelector(`[data-id="${id}"]`);
  const it = items.find((i) => i.id === id);
  if (!li || !it) return;

  // inline editor
  const input = document.createElement("input");
  input.type = "text";
  input.value = it.title;
  input.style.width = "100%";
  input.className = "edit";
  const titleEl = li.querySelector(".title");
  titleEl.replaceWith(input);
  input.focus();
  input.select();

  const finish = (ok) => {
    if (ok) {
      const v = input.value.trim();
      if (v) it.title = v;
    }
    save();
    render();
  };
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") finish(true);
    if (e.key === "Escape") finish(false);
  });
  input.addEventListener("blur", () => finish(true));
}

function remove(id, liEl) {
  if (liEl) {
    liEl.classList.add("fade-out");
    liEl.addEventListener("animationend", () => {
      items = items.filter((i) => i.id !== id);
      save();
      render();
    });
  } else {
    items = items.filter((i) => i.id !== id);
    save();
    render();
  }
}

// --- UI wiring ---
const input = $("#newTodo");
const addBtn = $("#addBtn");
const chipBtns = $$(".chip");
const clearDoneBtn = $("#clearDone");

addBtn.addEventListener("click", () => {
  add(input.value);
  input.value = "";
  input.focus();
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

chipBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const f = btn.dataset.filter;
    if (f) {
      filter = f;
      chipBtns.forEach((b) =>
        b.setAttribute("aria-pressed", String(b === btn))
      );
      render();
    }
  })
);

clearDoneBtn.addEventListener("click", () => {
  items = items.filter((i) => !i.done);
  save();
  render();
});

// Initial render
render();
