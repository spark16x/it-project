"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from '@/hooks/use-mobile'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group'

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", students: 222, students: 150 },
  { date: "2024-04-02", students: 97, students: 180 },
  { date: "2024-04-03", students: 167, students: 120 },
  { date: "2024-04-04", students: 242, students: 260 },
  { date: "2024-04-05", students: 373, students: 290 },
  { date: "2024-04-06", students: 301, students: 340 },
  { date: "2024-04-07", students: 245, students: 180 },
  { date: "2024-04-08", students: 409, students: 320 },
  { date: "2024-04-09", students: 59, students: 110 },
  { date: "2024-04-10", students: 261, students: 190 },
  { date: "2024-04-11", students: 327, students: 350 },
  { date: "2024-04-12", students: 292, students: 210 },
  { date: "2024-04-13", students: 342, students: 380 },
  { date: "2024-04-14", students: 137, students: 220 },
  { date: "2024-04-15", students: 120, students: 170 },
  { date: "2024-04-16", students: 138, students: 190 },
  { date: "2024-04-17", students: 446, students: 360 },
  { date: "2024-04-18", students: 364, students: 410 },
  { date: "2024-04-19", students: 243, students: 180 },
  { date: "2024-04-20", students: 89, students: 150 },
  { date: "2024-04-21", students: 137, students: 200 },
  { date: "2024-04-22", students: 224, students: 170 },
  { date: "2024-04-23", students: 138, students: 230 },
  { date: "2024-04-24", students: 387, students: 290 },
  { date: "2024-04-25", students: 215, students: 250 },
  { date: "2024-04-26", students: 75, students: 130 },
  { date: "2024-04-27", students: 383, students: 420 },
  { date: "2024-04-28", students: 122, students: 180 },
  { date: "2024-04-29", students: 315, students: 240 },
  { date: "2024-04-30", students: 454, students: 380 },
  { date: "2024-05-01", students: 165, students: 220 },
  { date: "2024-05-02", students: 293, students: 310 },
  { date: "2024-05-03", students: 247, students: 190 },
  { date: "2024-05-04", students: 385, students: 420 },
  { date: "2024-05-05", students: 481, students: 390 },
  { date: "2024-05-06", students: 498, students: 520 },
  { date: "2024-05-07", students: 388, students: 300 },
  { date: "2024-05-08", students: 149, students: 210 },
  { date: "2024-05-09", students: 227, students: 180 },
  { date: "2024-05-10", students: 293, students: 330 },
  { date: "2024-05-11", students: 335, students: 270 },
  { date: "2024-05-12", students: 197, students: 240 },
  { date: "2024-05-13", students: 197, students: 160 },
  { date: "2024-05-14", students: 448, students: 490 },
  { date: "2024-05-15", students: 473, students: 380 },
  { date: "2024-05-16", students: 338, students: 400 },
  { date: "2024-05-17", students: 499, students: 420 },
  { date: "2024-05-18", students: 315, students: 350 },
  { date: "2024-05-19", students: 235, students: 180 },
  { date: "2024-05-20", students: 177, students: 230 },
  { date: "2024-05-21", students: 82, students: 140 },
  { date: "2024-05-22", students: 81, students: 120 },
  { date: "2024-05-23", students: 252, students: 290 },
  { date: "2024-05-24", students: 294, students: 220 },
  { date: "2024-05-25", students: 201, students: 250 },
  { date: "2024-05-26", students: 213, students: 170 },
  { date: "2024-05-27", students: 420, students: 460 },
  { date: "2024-05-28", students: 233, students: 190 },
  { date: "2024-05-29", students: 78, students: 130 },
  { date: "2024-05-30", students: 340, students: 280 },
  { date: "2024-05-31", students: 178, students: 230 },
  { date: "2024-06-01", students: 178, students: 200 },
  { date: "2024-06-02", students: 470, students: 410 },
  { date: "2024-06-03", students: 103, students: 160 },
  { date: "2024-06-04", students: 439, students: 380 },
  { date: "2024-06-05", students: 88, students: 140 },
  { date: "2024-06-06", students: 294, students: 250 },
  { date: "2024-06-07", students: 323, students: 370 },
  { date: "2024-06-08", students: 385, students: 320 },
  { date: "2024-06-09", students: 438, students: 480 },
  { date: "2024-06-10", students: 155, students: 200 },
  { date: "2024-06-11", students: 92, students: 150 },
  { date: "2024-06-12", students: 492, students: 420 },
  { date: "2024-06-13", students: 81, students: 130 },
  { date: "2024-06-14", students: 426, students: 380 },
  { date: "2024-06-15", students: 307, students: 350 },
  { date: "2024-06-16", students: 371, students: 310 },
  { date: "2024-06-17", students: 475, students: 520 },
  { date: "2024-06-18", students: 107, students: 170 },
  { date: "2024-06-19", students: 341, students: 290 },
  { date: "2024-06-20", students: 408, students: 450 },
  { date: "2024-06-21", students: 169, students: 210 },
  { date: "2024-06-22", students: 317, students: 270 },
  { date: "2024-06-23", students: 480, students: 530 },
  { date: "2024-06-24", students: 132, students: 180 },
  { date: "2024-06-25", students: 141, students: 190 },
  { date: "2024-06-26", students: 434, students: 380 },
  { date: "2024-06-27", students: 448, students: 490 },
  { date: "2024-06-28", students: 149, students: 200 },
  { date: "2024-06-29", students: 103, students: 160 },
  { date: "2024-06-30", students: 446, students: 400 },
]

const chartConfig = {
  visitors: { label: "Visitors" },
  students: { label: "students", color: "var(--primary)" },
  teachers: { label: "teachers", color: "var(--primary)" },
}

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) setTimeRange("7d")
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")

    let daysToSubtract = timeRange === "30d" ? 30 : timeRange === "7d" ? 7 : 90

    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)

    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Students</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>

        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>

          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">Last 3 months</SelectItem>
              <SelectItem value="30d" className="rounded-lg">Last 30 days</SelectItem>
              <SelectItem value="7d" className="rounded-lg">Last 7 days</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>

              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  indicator="dot"
                />
              }
            />

            {/* FIXED LINES USING REAL DATA */}
            <Area
              dataKey="students"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="teachers"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
