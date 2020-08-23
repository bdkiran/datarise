---
category: feature
slug: /feature/streambatchproc
date: 2020-08-23
title: Understanding Streaming and Batch Processing Systems
image: static/insights_image.jpg
---
In the big data world an ongoing debate between using batch or stream processing. Developers in todays world need to develop and maintain with systems that scale. This is especially true for data processing systems, the amount of data flowing through can range from terabytes to petabytes.

Luckily now, both batch and stream processing has matured. Tooling for both types of systems has been developed. However, the key is choosing the correct tool for your unique use case. Batch and Stream processing falls under a similar category. The use cases vary, so having a solid understanding of what each consist of is key. 

## Batch Processing 
A batch processing system takes a large amount of input data, runs a job to process it and produces some output data. A key distinction is the cardinality of the input dataset. This dataset that is operated on is a complete, bounded data set. This means that it is finite in size and often times has been store for a significant period of time.

Bach jobs often take a while to run. A job can range from minutes to complete up to days. Therefore, these batch processing jobs are usually scheduled to run periodically and end-users don’t wait on the output.  Batch processing jobs measure of performance is throughput, how much it takes to process a certain size dataset.

Batch processing systems can be implemented using UNIX commands in shell script.
For more complicated use cases, it’s better to use a framework. One of the most famous batch processing frameworks is MapReduce. Using the MapReduce framework, one can write code to process large datasets (of on distributed filesystems). Though the complexity and the tools available differ using these two different methods, the core application remains the same. Given am input dataset x, apply processing to it and get an output dataset of y.

## Stream Processing
Like a batch processing system, a stream processing system consumes input and produces output. However, the cardinality of the input dataset of stream processing is unbounded data. This means that the dataset in infinite in size. Due to dealing with a dataset that is infinite often completeness isn’t defined. So stream processing systems operate on events one at a time, shortly after they happen. This allows for lower latency results when compared to batch processing jobs. This low latency is ofter referred to as real time or near real time.

Stream processing is the newer of the two processing systems. The need for stream processing occurred for a few reasons. Business want more timely insights. Massive and unbounded datasets have become more prevalent. There is a desire for workloads to be spread out more evenly.

In recent years, stream processing systems have evolved rapidly. Due to issues with completeness of input data and correctness of insights provided, streaming systems have gotten a bad wrap for being unreliable. Due to the evolution of of things like windowing techniques, triggers, watermarks, and accumulation methods these issues have been solved. Frameworks such as Apache link have the above, implemented and are accessible to developers.

## Conclusion
Both batch and stream processing systems are mature and accessible. As with most computing/programming choices, there is often no one size fits all solution.
It is important to note that use cases define which system one should use. When dealing with insights that may not be need to be updated up to the minute, using a less complex batch processing system is the right choice. When real time results are needed streaming systems are ones best choice. 
Even after choosing a systole for ones use case, within each of these processing systems there are further tradeoffs and design choices to be made. 
