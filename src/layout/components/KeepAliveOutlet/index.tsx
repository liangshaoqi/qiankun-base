import React, { useState, useEffect, Suspense, useMemo } from "react";
import Loading from "@/components/Loading";
import { useOutlet, useLocation, Outlet } from "react-router-dom";
import KeepAlive from "react-activation";
interface Props {}

function KeepAliveOutlet() {
  const outlet = useOutlet();
  const location = useLocation()
  const { pathname, search } = location

  const active = useMemo(() => {
    return pathname + search
  }, [pathname, search])

  const currentRoute = useMemo(() => {
    return 
  }, [active])

  return (
    <Suspense fallback={<Loading />}>
      {outlet}
    </Suspense>
  );
}

export default KeepAliveOutlet;
