# Global Statistics

Global statistic tracking consists of three parts:

- BlockStatistics autoload
- Nodes which compute statistics
- Nodes which listen for statistics

Information always flows from the nodes which compute statistics, to BlockStatistics, and finally to the nodes which listen for statistics.

Statistics are named. Only statistics with names as defined in BlockStatistics are considered valid. Invalid statistic names are rejected with a log message. `This should probably be more severe, since it can happen exclusively if a typo is made.`

A node computes either a delta or a whole new value for a given statistic, then calls the appropriate function on BlockStatistics. BlockStatistics then emits a signal to indicate to any listeners that some statistic has been updated.
