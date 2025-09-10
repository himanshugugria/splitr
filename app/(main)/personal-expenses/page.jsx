"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { BarLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText } from "lucide-react";
import { ExpenseList } from "@/components/expense-list";

export default function PersonalExpensesPage() {
  const router = useRouter();

  // Fetch all personal expenses
  const {
    data: personalExpenses,
    isLoading: personalExpensesLoading,
    error,
  } = useConvexQuery(api.expenses.getPersonalExpenses);

  // Memoize the total spent for efficiency
  const totalSpent = useMemo(() => {
    if (!personalExpenses || !personalExpenses.expenses) return 0;
    return personalExpenses.expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }, [personalExpenses]);

  if (personalExpensesLoading) {
    return (
      <div className="container mx-auto py-12 flex justify-center">
        <BarLoader width={"100%"} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 max-w-4xl space-y-6">
      <div className="mb-6">
        <Button
          variant="outline"
          size="sm"
          className="mb-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-4 rounded-md">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl gradient-title">Personal Expenses</h1>
            <p className="text-muted-foreground">
              A list of all expenses recorded by you, for you.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Personal Spending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalSpent.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              You have recorded {personalExpenses?.expenses.length} personal expenses
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ExpenseList expenses={personalExpenses?.expenses || []} />
          {personalExpenses?.expenses.length === 0 && (
            <p className="text-center text-muted-foreground">
              You have no personal expenses recorded.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
