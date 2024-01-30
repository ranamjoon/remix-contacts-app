var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// app/app.css
var app_default = "/build/_assets/app-V3UKCKY4.css";

// app/data.ts
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import invariant from "tiny-invariant";
var fakeContacts = {
  records: {},
  async getAll() {
    return Object.keys(fakeContacts.records).map((key) => fakeContacts.records[key]).sort(sortBy("-createdAt", "last"));
  },
  async get(id) {
    return fakeContacts.records[id] || null;
  },
  async create(values) {
    let id = values.id || Math.random().toString(36).substring(2, 9), createdAt = (/* @__PURE__ */ new Date()).toISOString(), newContact = { id, createdAt, ...values };
    return fakeContacts.records[id] = newContact, newContact;
  },
  async set(id, values) {
    let contact = await fakeContacts.get(id);
    invariant(contact, `No contact found for ${id}`);
    let updatedContact = { ...contact, ...values };
    return fakeContacts.records[id] = updatedContact, updatedContact;
  },
  destroy(id) {
    return delete fakeContacts.records[id], null;
  }
};
async function getContacts(query) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let contacts = await fakeContacts.getAll();
  return query && (contacts = matchSorter(contacts, query, {
    keys: ["first", "last"]
  })), contacts.sort(sortBy("last", "createdAt"));
}
async function createEmptyContact() {
  return await fakeContacts.create({});
}
async function getContact(id) {
  return fakeContacts.get(id);
}
async function updateContact(id, updates) {
  let contact = await fakeContacts.get(id);
  if (!contact)
    throw new Error(`No contact found for ${id}`);
  return await fakeContacts.set(id, { ...contact, ...updates }), contact;
}
async function deleteContact(id) {
  fakeContacts.destroy(id);
}
[
  {
    avatar: "https://sessionize.com/image/124e-400o400o2-wHVdAuNaxi8KJrgtN3ZKci.jpg",
    first: "Shruti",
    last: "Kapoor",
    twitter: "@shrutikapoor08"
  },
  {
    avatar: "https://sessionize.com/image/1940-400o400o2-Enh9dnYmrLYhJSTTPSw3MH.jpg",
    first: "Glenn",
    last: "Reyes",
    twitter: "@glnnrys"
  },
  {
    avatar: "https://sessionize.com/image/9273-400o400o2-3tyrUE3HjsCHJLU5aUJCja.jpg",
    first: "Ryan",
    last: "Florence"
  },
  {
    avatar: "https://sessionize.com/image/d14d-400o400o2-pyB229HyFPCnUcZhHf3kWS.png",
    first: "Oscar",
    last: "Newman",
    twitter: "@__oscarnewman"
  },
  {
    avatar: "https://sessionize.com/image/fd45-400o400o2-fw91uCdGU9hFP334dnyVCr.jpg",
    first: "Michael",
    last: "Jackson"
  },
  {
    avatar: "https://sessionize.com/image/b07e-400o400o2-KgNRF3S9sD5ZR4UsG7hG4g.jpg",
    first: "Christopher",
    last: "Chedeau",
    twitter: "@Vjeux"
  },
  {
    avatar: "https://sessionize.com/image/262f-400o400o2-UBPQueK3fayaCmsyUc1Ljf.jpg",
    first: "Cameron",
    last: "Matheson",
    twitter: "@cmatheson"
  },
  {
    avatar: "https://sessionize.com/image/820b-400o400o2-Ja1KDrBAu5NzYTPLSC3GW8.jpg",
    first: "Brooks",
    last: "Lybrand",
    twitter: "@BrooksLybrand"
  },
  {
    avatar: "https://sessionize.com/image/df38-400o400o2-JwbChVUj6V7DwZMc9vJEHc.jpg",
    first: "Alex",
    last: "Anderson",
    twitter: "@ralex1993"
  },
  {
    avatar: "https://sessionize.com/image/5578-400o400o2-BMT43t5kd2U1XstaNnM6Ax.jpg",
    first: "Kent C.",
    last: "Dodds",
    twitter: "@kentcdodds"
  },
  {
    avatar: "https://sessionize.com/image/c9d5-400o400o2-Sri5qnQmscaJXVB8m3VBgf.jpg",
    first: "Nevi",
    last: "Shah",
    twitter: "@nevikashah"
  },
  {
    avatar: "https://sessionize.com/image/2694-400o400o2-MYYTsnszbLKTzyqJV17w2q.png",
    first: "Andrew",
    last: "Petersen"
  },
  {
    avatar: "https://sessionize.com/image/907a-400o400o2-9TM2CCmvrw6ttmJiTw4Lz8.jpg",
    first: "Scott",
    last: "Smerchek",
    twitter: "@smerchek"
  },
  {
    avatar: "https://sessionize.com/image/08be-400o400o2-WtYGFFR1ZUJHL9tKyVBNPV.jpg",
    first: "Giovanni",
    last: "Benussi",
    twitter: "@giovannibenussi"
  },
  {
    avatar: "https://sessionize.com/image/f814-400o400o2-n2ua5nM9qwZA2hiGdr1T7N.jpg",
    first: "Igor",
    last: "Minar",
    twitter: "@IgorMinar"
  },
  {
    avatar: "https://sessionize.com/image/fb82-400o400o2-LbvwhTVMrYLDdN3z4iEFMp.jpeg",
    first: "Brandon",
    last: "Kish"
  },
  {
    avatar: "https://sessionize.com/image/fcda-400o400o2-XiYRtKK5Dvng5AeyC8PiUA.png",
    first: "Arisa",
    last: "Fukuzaki",
    twitter: "@arisa_dev"
  },
  {
    avatar: "https://sessionize.com/image/c8c3-400o400o2-PR5UsgApAVEADZRixV4H8e.jpeg",
    first: "Alexandra",
    last: "Spalato",
    twitter: "@alexadark"
  },
  {
    avatar: "https://sessionize.com/image/7594-400o400o2-hWtdCjbdFdLgE2vEXBJtyo.jpg",
    first: "Cat",
    last: "Johnson"
  },
  {
    avatar: "https://sessionize.com/image/5636-400o400o2-TWgi8vELMFoB3hB9uPw62d.jpg",
    first: "Ashley",
    last: "Narcisse",
    twitter: "@_darkfadr"
  },
  {
    avatar: "https://sessionize.com/image/6aeb-400o400o2-Q5tAiuzKGgzSje9ZsK3Yu5.JPG",
    first: "Edmund",
    last: "Hung",
    twitter: "@_edmundhung"
  },
  {
    avatar: "https://sessionize.com/image/30f1-400o400o2-wJBdJ6sFayjKmJycYKoHSe.jpg",
    first: "Clifford",
    last: "Fajardo",
    twitter: "@cliffordfajard0"
  },
  {
    avatar: "https://sessionize.com/image/6faa-400o400o2-amseBRDkdg7wSK5tjsFDiG.jpg",
    first: "Erick",
    last: "Tamayo",
    twitter: "@ericktamayo"
  },
  {
    avatar: "https://sessionize.com/image/feba-400o400o2-R4GE7eqegJNFf3cQ567obs.jpg",
    first: "Paul",
    last: "Bratslavsky",
    twitter: "@codingthirty"
  },
  {
    avatar: "https://sessionize.com/image/c315-400o400o2-spjM5A6VVfVNnQsuwvX3DY.jpg",
    first: "Pedro",
    last: "Cattori",
    twitter: "@pcattori"
  },
  {
    avatar: "https://sessionize.com/image/eec1-400o400o2-HkvWKLFqecmFxLwqR9KMRw.jpg",
    first: "Andre",
    last: "Landgraf",
    twitter: "@AndreLandgraf94"
  },
  {
    avatar: "https://sessionize.com/image/c73a-400o400o2-4MTaTq6ftC15hqwtqUJmTC.jpg",
    first: "Monica",
    last: "Powell",
    twitter: "@indigitalcolor"
  },
  {
    avatar: "https://sessionize.com/image/cef7-400o400o2-KBZUydbjfkfGACQmjbHEvX.jpeg",
    first: "Brian",
    last: "Lee",
    twitter: "@brian_dlee"
  },
  {
    avatar: "https://sessionize.com/image/f83b-400o400o2-Pyw3chmeHMxGsNoj3nQmWU.jpg",
    first: "Sean",
    last: "McQuaid",
    twitter: "@SeanMcQuaidCode"
  },
  {
    avatar: "https://sessionize.com/image/a9fc-400o400o2-JHBnWZRoxp7QX74Hdac7AZ.jpg",
    first: "Shane",
    last: "Walker",
    twitter: "@swalker326"
  },
  {
    avatar: "https://sessionize.com/image/6644-400o400o2-aHnGHb5Pdu3D32MbfrnQbj.jpg",
    first: "Jon",
    last: "Jensen",
    twitter: "@jenseng"
  }
].forEach((contact) => {
  fakeContacts.create({
    ...contact,
    id: `${contact.first.toLowerCase()}-${contact.last.toLocaleLowerCase()}`
  });
});

// app/root.tsx
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var action = async () => {
  let contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
}, links = () => [
  { rel: "stylesheet", href: app_default }
], loader = async () => {
  let contacts = await getContacts();
  return json({ contacts });
};
function App() {
  let { contacts } = useLoaderData();
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2("div", { id: "sidebar", children: [
        /* @__PURE__ */ jsxDEV2("h1", { children: "Remix Contacts" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("div", { children: [
          /* @__PURE__ */ jsxDEV2(Form, { id: "search-form", role: "search", children: [
            /* @__PURE__ */ jsxDEV2(
              "input",
              {
                id: "q",
                "aria-label": "Search contacts",
                placeholder: "Search",
                type: "search",
                name: "q"
              },
              void 0,
              !1,
              {
                fileName: "app/root.tsx",
                lineNumber: 49,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV2("div", { id: "search-spinner", "aria-hidden": !0, hidden: !0 }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 56,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV2(Form, { method: "post", children: /* @__PURE__ */ jsxDEV2("button", { type: "submit", children: "New" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("nav", { children: contacts.length ? /* @__PURE__ */ jsxDEV2("ul", { children: contacts.map(
          (contact) => /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: `contacts/${contact.id}`, children: [
            contact.first || contact.last ? /* @__PURE__ */ jsxDEV2(Fragment, { children: [
              contact.first,
              " ",
              contact.last
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 69,
              columnNumber: 19
            }, this) : /* @__PURE__ */ jsxDEV2("i", { children: "No Name" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this),
            " ",
            contact.favorite ? /* @__PURE__ */ jsxDEV2("span", { children: "\u2605" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 67,
            columnNumber: 21
          }, this) }, contact.id, !1, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV2("p", { children: /* @__PURE__ */ jsxDEV2("i", { children: "No contacts" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { id: "detail", children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/contacts.$contactId.destroy.tsx
var contacts_contactId_destroy_exports = {};
__export(contacts_contactId_destroy_exports, {
  action: () => action2
});
import { redirect as redirect2 } from "@remix-run/node";
import invariant2 from "tiny-invariant";
var action2 = async ({
  params
}) => (invariant2(params.contactId, "Missing contactId param"), await deleteContact(params.contactId), redirect2("/"));

// app/routes/contacts.$contactId_.edit.tsx
var contacts_contactId_edit_exports = {};
__export(contacts_contactId_edit_exports, {
  action: () => action3,
  default: () => EditContact,
  loader: () => loader2
});
import { json as json2, redirect as redirect3 } from "@remix-run/node";
import { Form as Form2, useLoaderData as useLoaderData2, useNavigate } from "@remix-run/react";
import invariant3 from "tiny-invariant";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var action3 = async ({
  params,
  request
}) => {
  invariant3(params.contactId, "Missing contactId param");
  let formData = await request.formData(), updates = Object.fromEntries(formData);
  return await updateContact(params.contactId, updates), redirect3(`/contacts/${params.contactId}`);
}, loader2 = async ({
  params
}) => {
  invariant3(params.contactId, "Missing contactId param");
  let contact = await getContact(params.contactId);
  if (!contact)
    throw new Response("Not Found", { status: 404 });
  return json2({ contact });
};
function EditContact() {
  let { contact } = useLoaderData2(), navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV3(Form2, { id: "contact-form", method: "post", children: [
    /* @__PURE__ */ jsxDEV3("p", { children: [
      /* @__PURE__ */ jsxDEV3("span", { children: "Name" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "input",
        {
          defaultValue: contact.first,
          "aria-label": "First name",
          name: "first",
          type: "text",
          placeholder: "First"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        "input",
        {
          "aria-label": "Last name",
          defaultValue: contact.last,
          name: "last",
          placeholder: "Last",
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("label", { children: [
      /* @__PURE__ */ jsxDEV3("span", { children: "Twitter" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "input",
        {
          defaultValue: contact.twitter,
          name: "twitter",
          placeholder: "@jack",
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 58,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("label", { children: [
      /* @__PURE__ */ jsxDEV3("span", { children: "Avatar URL" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "input",
        {
          "aria-label": "Avatar URL",
          defaultValue: contact.avatar,
          name: "avatar",
          placeholder: "https://example.com/avatar.jpg",
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 67,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("label", { children: [
      /* @__PURE__ */ jsxDEV3("span", { children: "Notes" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "textarea",
        {
          defaultValue: contact.notes,
          name: "notes",
          rows: 6
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 77,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { children: [
      /* @__PURE__ */ jsxDEV3("button", { type: "submit", children: "Save" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("button", { onClick: () => navigate(-1), type: "button", children: "Cancel " }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contacts.$contactId_.edit.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/contacts.$contactId.tsx
var contacts_contactId_exports = {};
__export(contacts_contactId_exports, {
  action: () => action4,
  default: () => Contact,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { Form as Form3, useLoaderData as useLoaderData3, useFetcher } from "@remix-run/react";
import invariant4 from "tiny-invariant";
import { Fragment as Fragment2, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var action4 = async ({
  params,
  request
}) => {
  invariant4(params.contactId, "Missing contactId param");
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true"
  });
}, loader3 = async ({
  params
}) => {
  invariant4(params.contactId, "Missing contactId param");
  let contact = await getContact(params.contactId);
  if (!contact)
    throw new Response("Not Found", { status: 404 });
  return json3({ contact });
};
function Contact() {
  let { contact } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV4("div", { id: "contact", children: [
    /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(
      "img",
      {
        alt: `${contact.first} ${contact.last} avatar`,
        src: contact.avatar
      },
      contact.avatar,
      !1,
      {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { children: [
      /* @__PURE__ */ jsxDEV4("h1", { children: [
        contact.first || contact.last ? /* @__PURE__ */ jsxDEV4(Fragment2, { children: [
          contact.first,
          " ",
          contact.last
        ] }, void 0, !0, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV4("i", { children: "No Name" }, void 0, !1, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV4(Favorite, { contact }, void 0, !1, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      contact.twitter ? /* @__PURE__ */ jsxDEV4("p", { children: /* @__PURE__ */ jsxDEV4(
        "a",
        {
          href: `https://twitter.com/${contact.twitter}`,
          children: contact.twitter
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 62,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) : null,
      contact.notes ? /* @__PURE__ */ jsxDEV4("p", { children: contact.notes }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 70,
        columnNumber: 26
      }, this) : null,
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4(Form3, { action: "edit", children: /* @__PURE__ */ jsxDEV4("button", { type: "submit", children: "Edit" }, void 0, !1, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4(
          Form3,
          {
            action: "destroy",
            method: "post",
            onSubmit: (event) => {
              confirm(
                "Please confirm you want to delete this record."
              ) || event.preventDefault();
            },
            children: /* @__PURE__ */ jsxDEV4("button", { type: "submit", children: "Delete" }, void 0, !1, {
              fileName: "app/routes/contacts.$contactId.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contacts.$contactId.tsx",
            lineNumber: 77,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contacts.$contactId.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
var Favorite = ({ contact }) => {
  let fetcher = useFetcher(), favorite = fetcher.formData ? fetcher.formData.get("favorite") === "true" : contact.favorite;
  return /* @__PURE__ */ jsxDEV4(fetcher.Form, { method: "post", children: /* @__PURE__ */ jsxDEV4(
    "button",
    {
      "aria-label": favorite ? "Remove from favorites" : "Add to favorites",
      name: "favorite",
      value: favorite ? "false" : "true",
      children: favorite ? "\u2605" : "\u2606"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 108,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/contacts.$contactId.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YJQCOI2H.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-CYGWRFZ3.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-MSQPQKHR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WBX7FW3G.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/contacts.$contactId": { id: "routes/contacts.$contactId", parentId: "root", path: "contacts/:contactId", index: void 0, caseSensitive: void 0, module: "/build/routes/contacts.$contactId-OWBAWX7G.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/contacts.$contactId.destroy": { id: "routes/contacts.$contactId.destroy", parentId: "routes/contacts.$contactId", path: "destroy", index: void 0, caseSensitive: void 0, module: "/build/routes/contacts.$contactId.destroy-CD54FBRA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contacts.$contactId_.edit": { id: "routes/contacts.$contactId_.edit", parentId: "root", path: "contacts/:contactId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/contacts.$contactId_.edit-BTQH56H4.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "11ceb55a", hmr: { runtime: "/build/_shared/chunk-MSQPQKHR.js", timestamp: 1705819662671 }, url: "/build/manifest-11CEB55A.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contacts.$contactId.destroy": {
    id: "routes/contacts.$contactId.destroy",
    parentId: "routes/contacts.$contactId",
    path: "destroy",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_contactId_destroy_exports
  },
  "routes/contacts.$contactId_.edit": {
    id: "routes/contacts.$contactId_.edit",
    parentId: "root",
    path: "contacts/:contactId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_contactId_edit_exports
  },
  "routes/contacts.$contactId": {
    id: "routes/contacts.$contactId",
    parentId: "root",
    path: "contacts/:contactId",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_contactId_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
