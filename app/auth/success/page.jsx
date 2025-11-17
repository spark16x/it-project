"use client";

import { Suspense } from "react";
import SuccessHandler from "./success-handler";

export default function Page() {
  return (
    <Suspense fallback={<p>Logging you in…</p>}>
      <SuccessHandler />
    </Suspense>
  );
}