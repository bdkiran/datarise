---
category: feature
slug: /feature/esvsmongo
date: 2019-05-04T00:00:00.000Z
title: Elasticsearch vs. MongoDB
image: codeImage.jpg
---
As the NoSQL movement has gained popularity over the past couple of years so has the rise of Elasticsearch and MongoDB. They have both grown significantly since their inception and have found their way into many companies' tech stacks. It is important to distinguish the differences between them so that you can make an informed decision about using one or the other for your use case.

MongoDB was originally released in 2009 as a general purpose database. Written in C++, it utilized a memory map file to map disk data for a memory byte array. This architecture allows for its performance for high write and high update throughput. 

Elasticsearch built on top Apache Lucene to extend its functionality. Released in 2010, it is written in Java and has a “shared nothing” architecture. The primary data structure is an inverted index based off of Lucenes APIs.

## Similarities

Elasticsearch and MongoDB are both instances of NoSQL databases. More specifically they are both document databases. This means that instead of dealing with data in columns like in relational (SQL) databases, documents employ a key value pair for storing data. Documents don't have a predefined structure. Due to this non-rigid nature, document data stores are a great choice for storing unstructured data.

Another thing that these two datastores have in common is their ability to support horizontal scaling. MongoDB distribution is done via sharding when done creates a Cluster. A MongoDB cluster consists of 3 main components. The first is a shard which contains a subset of data. Next is ‘Mongos’ that acts as a query router which provides an interface for client application. Lastly there is the Config Server which stores metadata and configuration settings about the cluster.

When Elasticsearch is distributed to many machines it’s also called a cluster. Each ‘machine” instance is called a node. Data is split into shards and then distributed amongst the nodes in the cluster. There is no central configuration machine, instead elasticsearch relies on master nodes to reach a quorum to resolve discrepancies.

## Differences
There are a number of differences that exist for MongoDB and Elasticsearch. It is important to note the original design goals of each data store. MongoDB was originally designed as a general purpose database. This meant support build around CRUD characteristics.
MongoDB documents are contained in collections which are similar to relational database tables. MongoDB documents can be stored as JSON data. An additional functionality is that data can be encoded and stored in BSON (binary encoding of json). This allows for greater efficiency of storage as BSON documents are smaller in size than their JSON counterparts.

Elasticsearch was designed as a distributed test search engine. The main mechanisms that provide this functionality is the vector space model and the inverted indexes for data retrieval. What they provide are highly efficient ways to compare record similarity against a query. So when Elasticsearch returns results for a query it returns a ranked result list that are most likely to match the query terms, and therefore cant guarantee an exact match. This is a different paradigm to traditional database query systems which is looking for exact matches.

This support for searching and indexing of large amounts of data makes Elasticsearch great for certain tasks. In addition to search engine capabilities, data aggregations are very well supported. Elasticsearch supports storing documents in JSON format but does not support BSON document storage. There have also been issues with data loss during writes. Due to this concern, many will say not to use Elasticsearch as a data store for transactional data, which data loss can be disastrous.

## Conclusion

Both databases are a great option for supporting software systems. It’s important to note when making design decisions, that there is not often a ‘one size fits all’ option. It is critical that the use case is determined and the pros and cons are weighed out to decide what solution to use.

