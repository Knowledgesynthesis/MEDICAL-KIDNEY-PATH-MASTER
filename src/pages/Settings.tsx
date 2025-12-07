import { Link } from 'react-router-dom'
import { ArrowLeft, Moon, Sun, Info, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { useThemeStore } from '@/stores/themeStore'

export function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Customize your learning experience
        </p>
      </div>

      <div className="space-y-6">
        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Appearance
            </CardTitle>
            <CardDescription>
              Customize how the app looks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode" className="text-base">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
              <Switch
                id="dark-mode"
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              About the App
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Medical Kidney Path Master</h4>
              <p className="text-sm text-muted-foreground">
                A comprehensive educational platform for renal pathology, designed for pathology
                residents, renal pathology fellows, and nephrology fellows. This app teaches
                systematic biopsy interpretation through LM, IF, and EM patterns.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Comprehensive coverage of glomerular, tubulointerstitial, and vascular diseases</li>
                <li>• Integrated IF and EM interpretation frameworks</li>
                <li>• Synthetic case bank with multi-modality findings</li>
                <li>• Session-only assessments (no data tracking)</li>
                <li>• Mobile-first, dark mode design</li>
                <li>• Offline-capable for use anywhere</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Educational Framework</h4>
              <p className="text-sm text-muted-foreground">
                Content is organized following standard nephropathology teaching:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                <li>1. Start with LM architecture and patterns</li>
                <li>2. Evaluate hypercellularity, GBM, sclerosis, necrosis</li>
                <li>3. Interpret IF patterns (granular vs linear vs negative)</li>
                <li>4. Analyze EM deposit location and foot process changes</li>
                <li>5. Integrate findings into diagnostic categories</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Version</h4>
              <p className="text-sm text-muted-foreground">
                Version 1.0.0
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <h4 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
                Educational Use Only
              </h4>
              <p className="text-sm text-muted-foreground">
                This application is intended solely for educational purposes. It is not designed
                for, and should not be used for, clinical diagnosis, patient care, or any
                medical decision-making.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">Synthetic Content</h4>
              <p className="text-sm text-muted-foreground">
                All images, diagrams, and case scenarios in this application are synthetic,
                diagrammatic, and created for educational illustration. No real patient data,
                histological images, or protected health information (PHI) is included.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">No Clinical Advice</h4>
              <p className="text-sm text-muted-foreground">
                This application does not provide medical advice, diagnoses, or treatment
                recommendations. Always consult appropriate medical resources and qualified
                healthcare professionals for clinical decision-making.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">No Data Collection</h4>
              <p className="text-sm text-muted-foreground">
                This application does not collect, store, or transmit any user data.
                Assessment scores and progress are session-only and are not saved or tracked.
                Your privacy is fully protected.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">Conceptual Frameworks</h4>
              <p className="text-sm text-muted-foreground">
                References to classification systems (such as ISN/RPS for lupus nephritis
                or Banff for transplant pathology) are conceptual and educational only.
                Always refer to official published guidelines for clinical use.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
