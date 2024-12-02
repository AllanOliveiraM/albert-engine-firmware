import { join } from 'node:path'

import { Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

import { ALBERT_PACKAGE_NAME } from 'proto/albert'

const DEFAULT_PORT = 5000

@Module({})
class AppModule {}

async function ignite() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: ALBERT_PACKAGE_NAME,
      protoPath: join(__dirname, 'proto/albert.proto'),
      loader: {
        keepCase: true,
      },

      url: `0.0.0.0:${process.env.PORT || DEFAULT_PORT}`,
    },
  })

  app.listen()
}

ignite()
