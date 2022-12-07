using System;

namespace DomainDrivenDesign.Comun
{
    public struct IntervalodeTiempo
    {
        public IntervalodeTiempo(DateTime start, DateTime end)
        {
            if (start > end)
            {
                throw new ArgumentException(
                    $"{nameof(start)} should not be greater than {nameof(end)}");
            }

            Start = start;
            End = end;
        }

        public DateTime Start { get; }

        public DateTime End { get; }

        public override bool Equals(object obj)
        {
            return obj is IntervalodeTiempo interval &&
                   Start == interval.Start &&
                   End == interval.End;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Start, End);
        }

        public static bool operator ==(IntervalodeTiempo a, IntervalodeTiempo b)
        {
            return a.Start == b.Start && a.End == b.End;
        }

        public static bool operator !=(IntervalodeTiempo a, IntervalodeTiempo b)
        {
            return !(a == b);
        }
    }
}
