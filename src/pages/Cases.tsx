import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { cases } from '@/data/cases'
import { cn } from '@/lib/utils'

export function Cases() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showDetails, setShowDetails] = useState(true)

  const currentCase = cases[currentCaseIndex]

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true)
    }
  }

  const handleNext = () => {
    setCurrentCaseIndex((prev) => Math.min(prev + 1, cases.length - 1))
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const handlePrevious = () => {
    setCurrentCaseIndex((prev) => Math.max(prev - 1, 0))
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const handleCaseSelect = (index: number) => {
    setCurrentCaseIndex(index)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const isCorrect = selectedAnswer === currentCase.correctAnswer

  const difficultyColors = {
    beginner: 'bg-green-500/10 text-green-600 dark:text-green-400',
    intermediate: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
    advanced: 'bg-red-500/10 text-red-600 dark:text-red-400',
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Integrated Case Bank</h1>
        <p className="text-muted-foreground">
          Practice with synthetic renal biopsy cases combining LM, IF, and EM findings.
        </p>
      </div>

      {/* Case Navigation */}
      <div className="mb-6 flex flex-wrap gap-2">
        {cases.map((c, i) => (
          <Button
            key={c.id}
            variant={i === currentCaseIndex ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleCaseSelect(i)}
            className="min-w-[40px]"
          >
            {i + 1}
          </Button>
        ))}
      </div>

      {/* Current Case */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={cn('px-2 py-0.5 rounded text-xs font-medium', difficultyColors[currentCase.difficulty])}>
                  {currentCase.difficulty}
                </span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                  {currentCase.category}
                </span>
              </div>
              <CardTitle>Case {currentCaseIndex + 1}: {currentCase.title}</CardTitle>
            </div>
          </div>
          <CardDescription className="mt-2">
            {currentCase.presentation}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Toggle Details */}
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
            {showDetails ? 'Hide' : 'Show'} Findings
          </Button>

          {showDetails && (
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              {/* LM Findings */}
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-semibold text-sm mb-2">Light Microscopy</h4>
                <ul className="space-y-1">
                  {currentCase.lm.map((finding, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IF Findings */}
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-semibold text-sm mb-2">Immunofluorescence</h4>
                <ul className="space-y-1">
                  {Object.entries(currentCase.if_pattern).map(([key, value]) => (
                    <li key={key} className="text-sm text-muted-foreground">
                      <span className="font-medium">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>

              {/* EM Findings */}
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-semibold text-sm mb-2">Electron Microscopy</h4>
                <ul className="space-y-1">
                  {currentCase.em.map((finding, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Question */}
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-4">{currentCase.question}</h4>

            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => !showResult && setSelectedAnswer(parseInt(value))}
              className="space-y-3"
            >
              {currentCase.options.map((option, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex items-center space-x-3 p-3 rounded-lg border transition-colors',
                    showResult && i === currentCase.correctAnswer && 'border-green-500 bg-green-500/10',
                    showResult && selectedAnswer === i && i !== currentCase.correctAnswer && 'border-red-500 bg-red-500/10',
                    !showResult && selectedAnswer === i && 'border-primary bg-primary/5',
                    !showResult && selectedAnswer !== i && 'hover:bg-muted'
                  )}
                >
                  <RadioGroupItem value={i.toString()} id={`option-${i}`} disabled={showResult} />
                  <Label htmlFor={`option-${i}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                  {showResult && i === currentCase.correctAnswer && (
                    <Check className="h-5 w-5 text-green-500" />
                  )}
                  {showResult && selectedAnswer === i && i !== currentCase.correctAnswer && (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
              ))}
            </RadioGroup>

            {/* Submit / Result */}
            <div className="mt-6">
              {!showResult ? (
                <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
                  Submit Answer
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className={cn(
                    'p-4 rounded-lg',
                    isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'
                  )}>
                    <h5 className={cn('font-semibold mb-2', isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')}>
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {currentCase.explanation}
                    </p>
                  </div>

                  {/* Key Teaching Points */}
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <h5 className="font-semibold text-sm mb-2">Key Teaching Points</h5>
                    <ul className="space-y-1">
                      {currentCase.keyTeachingPoints.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentCaseIndex === 0}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous Case
        </Button>
        <span className="text-sm text-muted-foreground self-center">
          Case {currentCaseIndex + 1} of {cases.length}
        </span>
        <Button
          variant="outline"
          onClick={handleNext}
          disabled={currentCaseIndex === cases.length - 1}
        >
          Next Case
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
