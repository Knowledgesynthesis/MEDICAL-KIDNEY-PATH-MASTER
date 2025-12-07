import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { initializeTheme } from '@/stores/themeStore'
import {
  Home,
  NormalAnatomy,
  GlomerularPatterns,
  ImmuneComplex,
  PauciImmune,
  AntiGBM,
  Podocytopathy,
  Membranous,
  MpgnC3g,
  Diabetic,
  FibrillaryAmyloid,
  TIN,
  Vascular,
  Transplant,
  IhcIfEm,
  Pitfalls,
  Cases,
  Assessment,
  Settings,
} from '@/pages'

function App() {
  useEffect(() => {
    initializeTheme()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="normal" element={<NormalAnatomy />} />
          <Route path="glomerular" element={<GlomerularPatterns />} />
          <Route path="immune-complex" element={<ImmuneComplex />} />
          <Route path="pauci-immune" element={<PauciImmune />} />
          <Route path="anti-gbm" element={<AntiGBM />} />
          <Route path="podocytopathy" element={<Podocytopathy />} />
          <Route path="membranous" element={<Membranous />} />
          <Route path="mpgn-c3g" element={<MpgnC3g />} />
          <Route path="diabetes" element={<Diabetic />} />
          <Route path="fibrillary-amyloid" element={<FibrillaryAmyloid />} />
          <Route path="tin" element={<TIN />} />
          <Route path="vascular" element={<Vascular />} />
          <Route path="transplant" element={<Transplant />} />
          <Route path="ihc-if-em" element={<IhcIfEm />} />
          <Route path="pitfalls" element={<Pitfalls />} />
          <Route path="cases" element={<Cases />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
