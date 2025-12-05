import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TimetablePage() {
  const timetable = {
    "11-A Science": [
      { time: "8:00 - 9:00", subject: "Physics" },
      { time: "9:00 - 10:00", subject: "Chemistry" },
      { time: "10:00 - 11:00", subject: "Maths" },
      { time: "11:00 - 12:00", subject: "Biology" },
    ],
    "11-B Commerce": [
      { time: "8:00 - 9:00", subject: "Accountancy" },
      { time: "9:00 - 10:00", subject: "Business Studies" },
      { time: "10:00 - 11:00", subject: "Economics" },
      { time: "11:00 - 12:00", subject: "Maths" },
    ],
    "11-C Arts": [
      { time: "8:00 - 9:00", subject: "History" },
      { time: "9:00 - 10:00", subject: "Political Science" },
      { time: "10:00 - 11:00", subject: "Geography" },
      { time: "11:00 - 12:00", subject: "English" },
    ],
  };

  return (
    <div className="min-h-screen p-6 flex flex-col gap-6 bg-background">
      <h1 className="text-3xl font-bold text-center mb-4">Class Timetable</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(timetable).map(([className, sessions]) => (
          <Card key={className} className="p-4">
            <CardHeader>
              <CardTitle>{className}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sessions.map((item, idx) => (
                  <div key={idx} className="p-3 border rounded-lg flex justify-between items-center">
                    <span className="font-medium">{item.time}</span>
                    <span>{item.subject}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
