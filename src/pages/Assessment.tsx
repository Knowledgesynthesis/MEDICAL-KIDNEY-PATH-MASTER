import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, RotateCcw, Check, X, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { getRandomQuestions } from '@/data/assessment'
import type { AssessmentQuestion } from '@/data/assessment'
import { cn } from '@/lib/utils'

type AssessmentState = 'setup' | 'in_progress' | 'complete'

export function Assessment() {
  const [state, setState] = useState<AssessmentState>('setup')
  const [questionCount, setQuestionCount] = useState(10)
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showExplanation, setShowExplanation] = useState(false)

  const startAssessment = () => {
    const selectedQuestions = getRandomQuestions(questionCount)
    setQuestions(selectedQuestions)
    setCurrentIndex(0)
    setAnswers({})
    setShowExplanation(false)
    setState('in_progress')
  }

  const currentQuestion = questions[currentIndex]

  const handleAnswer = (value: string) => {
    if (!showExplanation) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: parseInt(value),
      }))
    }
  }

  const handleSubmitAnswer = () => {
    setShowExplanation(true)
  }

  const handleNext = () => {
    setShowExplanation(false)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setState('complete')
    }
  }

  const score = useMemo(() => {
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }, [questions, answers])

  const resetAssessment = () => {
    setState('setup')
    setQuestions([])
    setCurrentIndex(0)
    setAnswers({})
    setShowExplanation(false)
  }

  // Setup Screen
  if (state === 'setup') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Assessment</h1>
          <p className="text-muted-foreground">
            Test your knowledge with randomized questions. Scores are session-only and not saved.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Start New Assessment</CardTitle>
            <CardDescription>
              Select the number of questions you want to answer
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="mb-3 block">Number of Questions</Label>
              <div className="flex gap-2">
                {[5, 10, 15, 20].map((count) => (
                  <Button
                    key={count}
                    variant={questionCount === count ? 'default' : 'outline'}
                    onClick={() => setQuestionCount(count)}
                    className="flex-1"
                  >
                    {count}
                  </Button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold text-sm mb-2">Categories Covered</h4>
              <p className="text-sm text-muted-foreground">
                Questions cover all topics: IF patterns, glomerular diseases, deposit locations,
                transplant pathology, special stains, and more.
              </p>
            </div>

            <Button onClick={startAssessment} className="w-full">
              Start Assessment
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Complete Screen
  if (state === 'complete') {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Assessment Complete</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-2">
              {score} / {questions.length}
            </CardTitle>
            <CardDescription className="text-lg">
              You answered {percentage}% correctly this session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={percentage} className="h-3 mb-6" />

            <div className="space-y-3">
              {questions.map((q, i) => {
                const userAnswer = answers[q.id]
                const isCorrect = userAnswer === q.correctAnswer

                return (
                  <div
                    key={q.id}
                    className={cn(
                      'p-3 rounded-lg border flex items-center gap-3',
                      isCorrect ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'
                    )}
                  >
                    <div className={cn(
                      'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
                      isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    )}>
                      {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        Q{i + 1}: {q.question}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {q.category}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button onClick={resetAssessment} variant="outline" className="flex-1">
            <RotateCcw className="h-4 w-4 mr-2" />
            Take Another
          </Button>
          <Link to="/" className="flex-1">
            <Button variant="default" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // In Progress Screen
  const hasAnswered = answers[currentQuestion.id] !== undefined
  const isCorrect = answers[currentQuestion.id] === currentQuestion.correctAnswer

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
            {currentQuestion.category}
          </span>
        </div>
        <Progress value={((currentIndex + 1) / questions.length) * 100} className="h-2" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={answers[currentQuestion.id]?.toString()}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, i) => (
              <div
                key={i}
                className={cn(
                  'flex items-center space-x-3 p-3 rounded-lg border transition-colors',
                  showExplanation && i === currentQuestion.correctAnswer && 'border-green-500 bg-green-500/10',
                  showExplanation && answers[currentQuestion.id] === i && i !== currentQuestion.correctAnswer && 'border-red-500 bg-red-500/10',
                  !showExplanation && answers[currentQuestion.id] === i && 'border-primary bg-primary/5',
                  !showExplanation && answers[currentQuestion.id] !== i && 'hover:bg-muted'
                )}
              >
                <RadioGroupItem value={i.toString()} id={`q-${i}`} disabled={showExplanation} />
                <Label htmlFor={`q-${i}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
                {showExplanation && i === currentQuestion.correctAnswer && (
                  <Check className="h-5 w-5 text-green-500" />
                )}
                {showExplanation && answers[currentQuestion.id] === i && i !== currentQuestion.correctAnswer && (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>

          {showExplanation && (
            <div className={cn(
              'mt-6 p-4 rounded-lg',
              isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'
            )}>
              <h5 className={cn(
                'font-semibold mb-2',
                isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              )}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </h5>
              <p className="text-sm text-muted-foreground">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <Button variant="ghost" onClick={resetAssessment}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Restart
            </Button>

            {!showExplanation ? (
              <Button onClick={handleSubmitAnswer} disabled={!hasAnswered}>
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
