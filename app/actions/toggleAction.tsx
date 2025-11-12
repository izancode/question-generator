// app/actions/toggleLayout.js
"use server";

let layoutState = true;

export async function toggleLayout(newState?: boolean): Promise<boolean>{
 if (typeof newState === "boolean") {
    layoutState = newState;
  }
  console.log("Server par layoutState:", layoutState);
  return layoutState;
}
